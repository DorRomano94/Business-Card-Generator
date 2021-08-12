const sql = require("../connection");

const Card = function (card) {
    this.userID = card.userID;
    this.title = card.title;
    this.subtitle = card.subtitle;
    this.email = card.email;
    this.phoneNumber = card.phoneNumber;
    this.selectedTemplate = card.selectedTemplate;
    this.location = card.location;
};

Card.create = (newCard, result) => {
    sql.query("INSERT INTO cards SET ?", newCard, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created card: ", { id: res.insertId, ...newCard });
        result(null, { id: res.insertId, ...newCard });
    });

}

Card.findById = (cardId, result) => {
    sql.query(`SELECT * FROM cards WHERE id = ${cardId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found cards: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found card with the id
        result({ kind: "not_found" }, null);
    });
};


module.exports = Card;