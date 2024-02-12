import { DataTypes, Sequelize } from "sequelize";

export const UserModel = (sequelize)=>{
    

    sequelize.define('user',{
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{timestamps: true})
}