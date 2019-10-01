const express = require("express");
const app = express();
const ca = require("chalk-animation");
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

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    ca.rainbow("ʕ•ᴥ•ʔ Shadow Architecture is running...");
});
