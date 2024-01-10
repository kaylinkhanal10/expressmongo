const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  role: {
    type: String,
    enum : ['Project Manager', 'Developer', 'Designer', 'Staff'],
    default: 'Staff'
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User
