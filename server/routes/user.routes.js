
const router = require('express').Router();
const verify = require('../verifyToken');
const users = require("../controllers/user.controller");

// Create a new users
router.post("/", users.create);

// Retrieve all users
router.get("/", users.findAll);

// Retrieve a single user with userId
router.get("/:userId", users.findOne);

// Retrieve a single user with email
router.post("/login", users.login);

// Update a user with userId
router.put("/:userid", users.update);

// Delete a user with userId
router.delete("/:usersId", users.delete);

// Create a new users
router.delete("/", users.deleteAll);

router.post("/checkToken", verify, users.checkAuth);

module.exports = router;


