import { Sequelize } from "sequelize";
import  {UserModel}  from "./user.model.js";
let User = null

export const connectDatabase = async()=>{

    const sequelize = new Sequelize( 'node-pg','postgres','Santosh@1324' ,{
        host: 'localhost',
        dialect:'postgres'
    
    })

    

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
       User = UserModel(sequelize)
       
       await sequelize.sync();
       console.log('Table has been created at successfully.');


      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

export  {User}