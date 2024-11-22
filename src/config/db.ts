import path from 'path';
import { fileURLToPath } from 'url';


import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const db = new Sequelize(process.env.DATABASE_URL!,{
    models: [__dirname + '/../models/**/*.ts']
})
export default db  