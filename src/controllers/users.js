const User = require('../models/user')

const registerNewUser  = (req, res)=> {
    User.create(req.body)
   res.send({msg: "user registered successfully"})
}


const getAllUsers  = (req, res)=> {
    const users = User.find()
}




module.exports = {registerNewUser,getAllUsers}