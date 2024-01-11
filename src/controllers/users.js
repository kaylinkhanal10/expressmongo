const User = require('../models/user')

const registerNewUser  = (req, res)=> {
    User.create(req.body)
   res.send({msg: "user registered successfully"})
}


const getAllUsers  = async(req, res)=> {
    const users = await User.find()
    res.json({users})
}

const getUserById  = async(req, res)=> {
  const userDetails =  await User.findById(req.params.id)
  res.json({userDetails})
}

const deleteUserById  = async(req, res)=> {
    const result =  await User.findByIdAndDelete(req.params.id)
    if(result) {
        res.json({msg: "deleted successfully"})
    }
  }
  
  const updateUserDetailsById  = async(req, res)=> {
    const result =  await User.findByIdAndUpdate(req.params.id, req.body)
    if(result) {
        res.json({msg: "updated successfully"})
    }
  }
  
  
module.exports = {registerNewUser,getAllUsers, getUserById,deleteUserById,updateUserDetailsById}