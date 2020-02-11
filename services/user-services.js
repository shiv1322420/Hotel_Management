let modal=require('../modal/userSignupSchema')
let adminModal=require('../modal/roomAddSchema')
//Insert Customer in DB
let signupUser = function (objToSave) {
	return new Promise((resolve, reject)=>{
		 new modal(objToSave).save((err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};


//check user in databse

let checkUser = function (criteria) {
	return new Promise((resolve, reject)=>{
		modal.find(criteria, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};


//get list of rooms
let getAllrooms = function (projection) {
	return new Promise((resolve, reject)=>{
		adminModal.find({bookingStatus:projection}, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};


//book room in and update in database
let updateRoom = function (id,updateStatus) {
    console.log("id in services:",id)
	return new Promise((resolve, reject)=>{
		adminModal.findByIdAndUpdate({_id:id},{bookingStatus:updateStatus}, (err,result)=>{
			if(err)
			reject (err)
		else{
			resolve (result)
		}
			
		});
	})
};

module.exports={
signupUser:signupUser,
checkUser:checkUser,
 getAllrooms:getAllrooms,
 updateRoom:updateRoom
}


