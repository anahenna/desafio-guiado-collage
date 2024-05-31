import 'dotenv/config'
import pg from 'pg'
const { Pool, Client } = pg

const connectionString =  process.env.CONNECTION_STRING

export const pool = new Pool({
    connectionString, 
    allowExitOnIdle: true,    
})

try{
    await pool.query("SELECT NOW()")
    console.log('Conexion a postgres')
}catch(error){
    console.log(error)
}