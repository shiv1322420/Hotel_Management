const mongoose = require('mongoose');
const addRoomSchema=mongoose.Schema({
roomType:{type:String,required: true},
facilities:[String],                         
price:{type:Number, required:true},
bookingStatus:{type:String}
},
{
    timestamps:true   //it is used t to automatically add two new fields - createdAt and updatedAt to the schema.
});

module.exports=mongoose.model('room_register',addRoomSchema)
