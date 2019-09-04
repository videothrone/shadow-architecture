const express = require("express");
const app = express();
const ca = require("chalk-animation");
const db = require("./utils/db");
const { hash, compare } = require("./utils/bc");
const compression = require("compression");

app.use(compression());

app.use(express.static("./public"));
app.use(express.json());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.post("/registration", (req, res) => {
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    let password = req.body.password;
    // first = first.toLowerCase();
    // first = first.charAt(0).toUpperCase() + first.substring(1);
    // last = last.toLowerCase();
    // last = last.charAt(0).toUpperCase() + last.substring(1);

    hash(password)
        .then(hash => {
            // console.log("hash: ", hash);
            db.addUsers(first, last, email, hash)
                .then(() => {
                    res.json({ success: true });
                })
                .catch(error => {
                    console.log("db.addUsers error: ", error);
                    res.json({ success: false });
                });
        })
        .catch(error => {
            console.log("hash(password) error: ", error);
            res.json({ success: false });
        });
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    ca.rainbow("ʕ•ᴥ•ʔ Social Network Express is running...");
});
