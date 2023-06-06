const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../model/helper");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

router.post("/register", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, saltRounds);

        await db(
            `INSERT INTO users (firstname, lastname, email, password) VALUES("${firstname}","${lastname}","${email}", "${hash}");`
        );
        res, send({ message: "You are now registered." });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const results = await db(
            `SELECT * FROM users WHERE username = "${email}"`
        );
        const user = results.data[0];
        if (user) {
            const user_id = user.id;

            const correctPassword = await bcrypt.compare(password, user.password);

            if (!correctPassword) throw new Error("Incorrect password");

            let token = jwt.sign({ user_id }, supersecret);
            res.send({ message: "Login successful" });
        } else {
            throw new Error("User does not exist");
        }
    } catch (err) {
        res.status(400).send({ message: err.mesage });
    }
});

// router.post("/profile", async (req, res) => {

// })

module.exports = router;