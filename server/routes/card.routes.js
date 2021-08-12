
const router = require('express').Router();
const cards = require("../controllers/card.controller");

// Create a new cards
router.post("/", cards.create);

router.get('/:cardId', cards.findOne);



module.exports = router;
