const express=require('express');
const app=require('../app')
const validate=require('../validators/user-validation')
const router=express.Router();
const userController=require('../controllers/user-controller')
router.post('/signup',validate.validateSignup,userController.signup);
 router.put('/bookRoom/:roomId',userController.bookRoom)
 router.get('/roomList',userController.fetchAllrooms)
module.exports=router;  