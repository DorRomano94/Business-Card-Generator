const Card = require("../models/card.model");

//Create
exports.create = (req, res) => {
    console.log("dd");
    if (!req.body.title && !req.body.selectedTemplate && !req.body.userID) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const card = new Card({
        userID: req.body.userID,
        title: req.body.title,
        subtitle: req.body.subtitle,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        selectedTemplate: req.body.selectedTemplate,
        location: req.body.location
    });
    // Save User in the database
    Card.create(card, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the card."
            });
        else res.send(data);
    });

}
exports.findOne = (req, res) => {
    Card.findById(req.params.cardId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Card with id ${req.params.cardId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Card with id " + req.params.cardId
                });
            }
        } else {

            res.send(data);
        }
    })
};