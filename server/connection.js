
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "db4free.net",
    user: "dorromanoo",
    password: "dorromanoo",
    database: "dorromanoo"
});

mysqlConnection.connect((err) => {
    if (!err) {
        // const CreateUsersTable = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), role VARCHAR(255))";
        // const CreateCardsTable = "CREATE TABLE IF NOT EXISTS cards (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), subtitle VARCHAR(255), userID INT, email VARCHAR(255), phoneNumber VARCHAR(255), location VARCHAR(255), selectedTemplate INT)";
        // mysqlConnection.query(CreateUsersTable, function (err, result) {
        //     if (err) throw err;
        //     console.log(result.message);
        // });
        // mysqlConnection.query(CreateCardsTable, function (err, result) {
        //     if (err) throw err;
        //     console.log(result.message);
        // });
        console.log('Connected to Database Successfully');
    }
    else {
        console.log('Database Connection Failed!' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mysqlConnection;