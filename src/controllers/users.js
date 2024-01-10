const User = require('../models/user')

const registerNewUser  = (req, res)=> {
    User.create(req.body)
   res.send({msg: "user registered successfully"})
}


const getAllUsers  = async(req, res)=> {
    const users = await User.find()
    res.json({users})
}




module.exports = {registerNewUser,getAllUsers}