import express from 'express';
import conexion from './config/conexion.js';
import cors from 'cors';
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const PORT = process.env.PORT || 8000;
app.use(cors());

app.listen(PORT,()=>{
    console.log('Servidor en ejecución en puerto '+PORT);
})

//Las rutas de la api rest

app.get('/frutas',(req,res)=>{
const myQuery = 'select * from frutas';
   conexion.query(myQuery,(err,data)=>{
       if(err){
           return err;
       }else{
           res.json({frutas:data});
       }
   });
});

app.get('/',function(req,res){
     res.send('Aplicación iniciada todo bien siiii');
});

app.post('/crear',(req,res)=>{
    const values = Object.values(req.body);
    const queryInsert = 'INSERT INTO frutas(nombre,color,precio) VALUES(?,?,?)';
    conexion.query(queryInsert,values,(err,data)=>{
        if(err){
            console.log(err);
            return err;
        }else{
            res.json({mensaje:'Fruta agregada'});
        }
    });
 });

app.get('/frutas/:id',(req,res)=>{
   const ID = req.params.id;
   const myQuery = 'SELECT * FROM frutas WHERE id = ?';
   conexion.query(myQuery,[ID],(err,data)=>{
       if(err){
           console.log(err);
           return err;
       }else{
           res.json(data);
       }
   });

});

app.put('/update',(req,res)=>{
    const values = Object.values(req.body);
    const myQuery = 'UPDATE frutas SET nombre = ? , color = ? , precio = ? WHERE id = ?';
    conexion.query(myQuery,values,(err,result)=>{
        if(err){
            console.log(err);
            return err;
        }else{
            res.json(result);
        }
    });

});

app.delete('/delete/:id',(req,res)=>{
    const ID = req.params.id;
    const myQuery = 'DELETE FROM frutas WHERE id=?';
    conexion.query(myQuery,[ID],(err,result)=>{
        if(err){
            console.log(err);
            return err;
        }else{
            res.json({mensaje:'Fruta eliminada'});
        }
    });
});

