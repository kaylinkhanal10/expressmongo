const express = require('express')
const {registerNewUser,getAllUsers} = require('../controllers/users')

router = express.Router();

router.post("/register", registerNewUser);
router.get("/users", getAllUsers);

module.exports = router