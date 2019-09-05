const spicedPg = require("spiced-pg");
const { dbuser, dbpass } = require("../secrets");
let db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/socialnetwork`);

exports.addUsers = function(first, last, email, password) {
    return db.query(
        `INSERT INTO users (first, last, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id`,
        [first || null, last || null, email || null, password || null]
    );
};

exports.getLogin = email => {
    return db.query(`SELECT id, password FROM users WHERE email = $1`, [email]);
};

exports.addProfilePic = function(imageurl, id) {
    console.log(imageurl, id);
    return db.query(
        `UPDATE users
        SET imageurl= $1
        WHERE id = $2
        RETURNING imageurl`,
        [imageurl, id]
    );
};

exports.getUser = function(id) {
    return db.query(
        `SELECT first, last, imageurl
        FROM users
        WHERE id = $1`,
        [id]
    );
};
