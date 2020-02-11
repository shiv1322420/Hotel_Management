const express=require('express');
const validate=require('../validators/admin-validation')
const router=express.Router();
const adminController=require('../controllers/admin-controller')
router.post('/addRoom',validate.validateRoom,adminController.addRoom);
router.put('/updateRoom/:roomId',validate.updateRoomValidation,adminController.updateRoom);
router.put('/cancalBooking/:roomId',adminController.cancalBooking);
router.delete('/deleteRoom/:roomId',adminController.deleteRoom);
module.exports=router;