import express from 'express'
import routerPaquetes from './router';
import routerPosts from './router';
import db from './config/db';


//conectar a DB

async function conectarDB(){
    try{
        await db.authenticate
        db.sync()
        console.log('Conexion existosa a la BD.')
    } catch(error){
        console.log('Error al establecer la conexion con la base de datos...');
        console.log(error);
    }
}

conectarDB();

const server = express();

server.use('/API/paquetes', routerPaquetes)

server.use('/API/posts', routerPosts)



export default server
