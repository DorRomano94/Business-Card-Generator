const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName && !req.body.password && !req.body.lastName && !req.body.email) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    User.findByEmail(req.body.email, (err, data) => {
        if (!err) {
            {
                return res.status(404).send({ message: 'Email in already used' })
            }
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);    // Create a User
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role,
        });
        // Save User in the database
        User.create(user, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the user."
                });
            else res.send(data);
        });
    }
    )
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            })
        } else {
            res.send(data);
        }
    })
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.userId
                });
            }
        } else {
            res.send(data);
        }
    })
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating User with id " + req.params.userId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.userId
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        else res.send({ message: `All users were deleted successfully!` });
    });
};


exports.login = (req, res) => {
    let user;
    User.findByEmail(req.body.email, (err, data) => {
        if (err) {
            {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Not found User with email ${req.body.email}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving User with email " + req.body.email
                    });
                }
            }
        } else {
            user = data;
            const validPassword = bcrypt.compareSync(req.body.password, user.password);
            if (!validPassword) {//
                res.status(401).send({ message: 'Invalid Password.' })
            } else {
                const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });
                const secureUser = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                    token: token
                }
                res.send(secureUser);
            };
        }
    })
}

exports.checkAuth = (req, res) => {
    User.findById(req.user.id, (err, data) => {
        if (err) {
            res.status(404).send({
                message: `Not found User with id ${req.userID}.`
            });
        } else {
            const secureUser = {
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                role: data.role,
                token: req.header('token')
            }
            res.send(secureUser)
        }

    })
}