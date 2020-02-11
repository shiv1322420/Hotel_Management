const adminServices = require('../services/admin-services');
const hashPassword = require('../util/hash-password');
const token = require('../util/token');

let addRoom = async (req, res) => {
    let roomType = req.body.roomType;
    let facilities = req.body.facilities;
    let price = req.body.price;
    let bookingStatus = "available";   //by default new added room is available

    //     save data in database
    roomData = {
        roomType,
        facilities,
        price,
        bookingStatus
    }
    console.log("roomdata---", roomData)
    try {
        let roomDbData = await adminServices.insertRoom(roomData);
        res.json({
            "message": "Successfully add new room",
            "status": 200,
            "data": roomData
        })
    } catch (error) {
        console.log(error)
        res.json({
            "message": "Cannot added successfully",
            "status": 400,
            "data": error
        })
    }
}


//update room details
let updateRoom = async (req, res) => {
    let id = req.params.roomId;
    let roomData = req.body;
    console.log(roomData)
    try {
        let roomDbData = await adminServices.editRoomDetails(id, roomData);
        res.json({
            "message": "Successfully updated",
            "status": 200,
            "data": roomDbData
        })
    } catch (error) {
        console.log(error)
        res.json({
            "message": "Cannot update details successfully",
            "status": 400,
            "data": error
        })
    }

}

//delete room from database
let deleteRoom = async (req, res) => {
    let id = req.params.roomId;
    try {
        let roomDbData = await adminServices.deleteRoom(id);
        res.json({
            "message": "Successfully deleted",
            "status": 200,
            "data": roomDbData
        })
    } catch (error) {
        console.log(error)
        res.json({
            "message": "Cannot deleted details successfully",
            "status": 400,
            "data": error
        })
    }

}



//cancal booking available room
let cancalBooking = async (req, res) => {
    let id = req.params.roomId;
    let checkroom = await adminServices.checkRoomById(id);
    let bookingStatus = "available";
    try {
        if (checkroom.bookingStatus === "booked") {
            try {

                let roomDbData = await adminServices.updateRoomStatus(id, bookingStatus);
                res.json({
                    "message": "booking calceled successfully",
                    "status": 200,
                    "data": checkroom
                })
            } catch (error) {
                throw new error
            }

        }
        else {
            res.json({
                "message": "room is already available",
                "status": 400,
                "data": error
            })
        }
    } catch (error) {
        res.json({
            "message": "booking cannot be canceled",
            "status": 400,
            "data": error
        })
    }



}

module.exports = {
    addRoom,
    updateRoom,
    deleteRoom,
    cancalBooking
}