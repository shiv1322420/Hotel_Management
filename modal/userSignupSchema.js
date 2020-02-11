const mongoose = require('mongoose');
const signupSchema=mongoose.Schema({
name:{type:String,required: true},
email:{type:String,required: true},                         
password:{type:String,required: true},
logoutKey:{type:String},
},
{
    timestamps:true   //it is used t to automatically add two new fields - createdAt and updatedAt to the schema.
});
module.exports=mongoose.model('user_register',signupSchema)
