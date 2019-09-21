const express = require("express");
const app = express();
const ca = require("chalk-animation");
const db = require("./utils/db");
const { hash, compare } = require("./utils/bc");
const cookieSession = require("cookie-session");
// const csurf = require("csurf");
const s3 = require("./s3");
const config = require("./config");
const compression = require("compression");

app.use(compression());
app.use(express.static("./public"));
app.use(express.json());

// cookie session setup
app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

// app.use(csurf());
//
// app.use(function(req, res, next) {
//     res.cookie("mytoken", req.csrfToken());
//     next();
// });

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

app.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    db.getLogin(email)
        .then(results => {
            compare(password, results.rows[0].password)
                .then(compResult => {
                    if (compResult) {
                        req.session.userId = results.rows[0].id;
                        res.json({ success: true });
                    } else {
                        res.json({ success: false });
                    }
                })
                .catch(error => {
                    console.log("db.getLogin compare error: ", error);
                    res.json({ success: false });
                });
        })
        .catch(error => {
            console.log("db.getLogin catch error: ", error);
            res.json({ success: false });
        });
});

app.get("/users", (req, res) => {
    db.getUser(req.session.userId)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            console.log("error from app.get /users: ", error);
        });
    // console.log("This is the users route");
});

// app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
//     // req.file -> the file that was just uploaded
//     const { filename } = req.file;
//     const imageurl = config.s3Url + filename;
//     // console.log("imageurl", imageurl);
//     if (req.file) {
//         db.addProfilePic(imageurl, req.session.userId)
//             .then(function(data) {
//                 // console.log("data:", data.rows[0].imageurl);
//                 res.json({ imageurl: data.rows[0].imageurl });
//             })
//             .catch(function(error) {
//                 console.log("error in app.post /upload: ", error);
//             });
//     } else {
//         res.json({
//             success: false
//         });
//     }
// });

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/welcome");
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    ca.rainbow("ʕ•ᴥ•ʔ Shadow Architecture is running...");
});
