import mysql from 'mysql';

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'apirest_db'
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