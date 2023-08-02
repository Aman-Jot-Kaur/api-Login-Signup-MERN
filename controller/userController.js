const mongoose=require("mongoose");
const UserModel=require("../models/userModel")
const express=require("express");

const signup=async(req,res)=>{
  
    try{
    const userobj = new UserModel(req.body);
    console.log(userobj)
    const result= await userobj.save();
    res.status(200).send("data saved");
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
const login=async(req,res)=>{
try{
     const email=await UserModel.findOne({email:req.body.email})
     if(email){
        const user=email.password;
        if(user==req.body.password){
            res.status(200).send("user found!")
        }
        else{
            res.status(403).send("password incorrect!")
        }
     }
     else{
        res.status(401).send("email not found")
     }
}
catch(err){
    res.status(500).send(err)
}
 


}

const updatePassword=async(req,res)=>{
  try{
    const password=req.body.password;
    const email=await UserModel.findOneAndUpdate({email:req.body.email},{password});
    if(email){
        res.status(200).send("updated")
    }
    else{
        res.status(404).send("can not find account to update")
    }
  }
  catch(err){
 res.status(500).send(err)
  }
}

const updateEmail=async(req,res)=>{
    try{
       const {email,newmail}=req.body;
    
       const newmailconfirm=await UserModel.findOne({newmail});
       if(newmailconfirm){
      return res.status(401).send("an account your new mail already exists")
       }
       const user=await UserModel.findOneAndUpdate({email},{email:newmail});
       if(user){
        console.log(user)
          return res.status(200).send("updated")
       }
       else{
           res.status(404).send("can not find account to update")
       }

    }
    catch(err){
        res.status(500).send(err)
         }

}

const allusers=async(req,res)=>{
    try{
const users=await UserModel.find();
return res.status(200).send(users)
    }
    catch(err){
    console.log(err)
    return res.status(500).send(err)
    }
}


module.exports = {signup, login,updatePassword,updateEmail,allusers}