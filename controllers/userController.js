import express from 'express';
import { User } from '../models';
import bcrypt from 'bcrypt'

const signup = async(req,res,next)=>{
   const {userName,email,password} = req.body
   const data = {
    userName,
    email,
    password: await bcrypt.hash(password,10)
   };

   const user = await User.create(data);
}