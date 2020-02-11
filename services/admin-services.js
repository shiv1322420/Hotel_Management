let modal=require('../modal/roomAddSchema')
//Insert Admin in DB
let insertRoom = function (objToSave) {
	console.log("pbjey",objToSave)
	return new Promise((resolve, reject)=>{
		 new modal(objToSave).save((err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

//edit room details in db

let editRoomDetails = function (id,updateDetail) {
	return new Promise((resolve, reject)=>{
		modal.findByIdAndUpdate(id,updateDetail, (err,result)=>{
			if(err)
			reject (err)
		else
			resolve (result)
		});
	})
};

let deleteRoom = function (id) {
	return new Promise((resolve, reject)=>{
		modal.deleteOne({_id:id}, (err,result)=>{
			if(err)
			reject (err)
		else
			resolve (result)
		});
	})
};


//cancal booked room in and update in database
let updateRoomStatus = function (id,updateStatus) {
    console.log("id in services:",id)
	return new Promise((resolve, reject)=>{
		modal.findByIdAndUpdate({_id:id},{bookingStatus:updateStatus}, (err,result)=>{
			if(err)
			reject (err)
		else{
			resolve (result)
		}
			
		});
	})
};



//check room by id

let checkRoomById = function (id) {
	return new Promise((resolve, reject)=>{
		modal.findOne({_id:id}, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};



	

module.exports={
insertRoom:insertRoom,
checkRoomById:checkRoomById,
editRoomDetails:editRoomDetails,
deleteRoom:deleteRoom,
updateRoomStatus:updateRoomStatus
}