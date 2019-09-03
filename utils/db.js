const spicedPg = require("spiced-pg");
const { dbuser, dbpass } = require("../secrets");
let db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/socialnetwork`);

exports.addUsers = function(first, last, email, password) {
    return db.query(
        `INSERT INTO users (first, last, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id`,
        [first, last, email, password]
    );
};

// exports.getLogin = email => {
//     return db.query(`SELECT id, password FROM users WHERE email = $1`, [email]);
// };
