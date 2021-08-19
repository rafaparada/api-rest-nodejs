import mysql from 'mysql';

import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
const conexion = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

conexion.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Conexion establecida..');
    }
});

export default conexion;