const express = require('express')
const {registerNewUser,getAllUsers,getUserById, deleteUserById,updateUserDetailsById} = require('../controllers/users')

router = express.Router();

router.post("/register", registerNewUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUserDetailsById);

module.exports = router