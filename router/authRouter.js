const express=require('express');
const{login,register}=require('./controller/authController');

const router=express.Router();

router.route('/login').get(login);
router.route('/register').post(register);

module.exports=router;