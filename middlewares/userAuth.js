import  express  from 'express'
import { User } from '../models'


const userDetails = async(req,res,next)=>{
    try{
        const username = await User.findOne({ where: { userName: req.body.userName }, });

        if(username){
            //username already exists
           return  res.status(500).send('USername is already taken ')
        }

        const email = await User.findOne({ where: { email: req.body.email }, });

        if(email){
              //email already exists
           return  res.status(500).send('Email is already taken ')
        }


        next();


    }
    catch(err){
        console.log(err)

    }
}

module.exports = {userDetails}