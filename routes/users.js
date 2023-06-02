const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// GET users listing
router.get('/', function(req, res) {
  db("SELECT * FROM users;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// GET one user
router.get("/:user_id", async function(req, res) {
  const { user_id } = req.params;
  try {
    const results = await db(`SELECT * FROM users WHERE id = ${user_id};`);
    if (results.data.length) {
      res.send(results.data[0]);
    } else res.status(404).send({ message: "User not found" });
  } catch (err) {
    res.status(500).send(err);
  }
})

//CREATE a new user
router.post("/", async function(req,res) {
  const {firstname, lastname, email, password} = req.body;
  try{
    const results = await db(
    `INSERT INTO users (firstname, lastname, registration_date, username, password) VALUES("${firstname}","${lastname}","${email}", "${password}");`
    );
    res.send({message:'User added'})
  } catch(err){
    console.log(err)
    res.status(500).send(err);
  }
})

// EDIT a user
router.put('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const {firstname, lastname, email, password} = req.body;
  try {
    const results = await db(`UPDATE users SET firstname = ("${firstname}"), firstname = ("${lastname}"), email = (${email}), password = (${password}) WHERE id = ${user_id};`);
    res.send(results.data);
    } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a user
router.delete("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    await db(`DELETE FROM petlist WHERE id = ${ user_id };`);
    res.send("User deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});



module.exports = router;
