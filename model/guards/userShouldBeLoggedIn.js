const jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

function userShouldBeLoggedIn(req, res, next) {
    const token = req.headers["authorisation"].replace(/^Bearer\s/, "");
    if (!token) {
        res.status(401).send({ message: "Please provide a token" });
    } else {
        jwt.verify(token, supersecret, function (err, decoded) {
            if (err) res.status(401).send({ message: err.message });
            else {
                req.user_id = decoded.user_id;
                next();
            }
        });
    }
}

module.export = userShouldBeLoggedIn;