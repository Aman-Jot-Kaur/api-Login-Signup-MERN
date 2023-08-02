const express=require("express")
const router=express.Router();

const appcontroller=require("../controller/userController")
router.post('/signup',appcontroller.signup);
router.post('/login',appcontroller.login);
router.post('/updatepassword',appcontroller.updatePassword)
router.post('/updatemail',appcontroller.updateEmail)
router.get('/allusers',appcontroller.allusers)
module.exports=router;
