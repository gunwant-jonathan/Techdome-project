// conn.js 
const { Pool } = require('pg'); 

const pool = new Pool({ 

host: process.env.DB_HOST || 'localhost',  

user: process.env.DB_USER || 'postgres',   

password: process.env.DB_PASSWORD || 'NewPassword1234',  

database: process.env.DB_NAME || 'Techdome-DB',     

port: process.env.DB_PORT || 5432  

}); 

// Export the pool to be used in other files 

module.exports = pool; 