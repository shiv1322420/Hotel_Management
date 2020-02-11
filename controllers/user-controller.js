const userServices = require('../services/user-services');
const hashPassword = require('../util/hash-password');
const token = require('../util/token');
const accessToken = require('../config/constants');

let signup = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let password = await hashPassword.generateHashPassword(req.body.password);
    let location = req.body.location;
    let logoutKey = "false";
    console.log(req.body);

    //     save data in database
    userData = {
        name,
        email,
        password,
        location,
        logoutKey
    }
    let criteria = { email }
    //check customer exist or not
    let userExist = await userServices.checkUser(criteria)
    if (userExist.length > 0) {
        res.json({
            "message": "Customer exist..",
            "status": 400,
            "data": {}
        })

    } else {
        try {
            let userDbData = await userServices.signupUser(userData);
            res.json({
                "message": "Successfully registered",
                "status": 200,
                "data": userData
            })
        } catch (error) {
            console.log(error)
            res.json({
                "message": "Cannot registered successfully",
                "status": 400,
                "data": error
            })
        }
    }


}

//get all available rooms

let fetchAllrooms = async (req, res) => {
    let projection = "available"
    try {
        let roomsDbData = await userServices.getAllrooms(projection)
        res.send(roomsDbData)

    } catch (error) {
        console.log(error)
        res.json({
            "message": "Error during fetching data",
            "status": 400,
            "data": error
        })
    }
}

//book available room
let bookRoom = async (req, res) => {
    let id = req.params.roomId;
    let bookingStatus = "booked";
    try {
        let roomDbData = await userServices.updateRoom(id, bookingStatus);
        res.json({
            "message": "room booked successfully",
            "status": 200,
            "data": roomDbData
        })
    } catch (error) {
        console.log(error)
        res.json({
            "message": "room cannot be booked",
            "status": 400,
            "data": error
        })
    }

}
module.exports = {
    signup,
    fetchAllrooms,
    bookRoom

}