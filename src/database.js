const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'mysql-2a66fc27-dc-server.c.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_iOrwQgXA88hHy81731h',
  database: 'defaultdb'
});
// connect to the MySQL database
connection.connect((error)=>{
if(error){
console.error('Error connecting to MySQL database:', error);
}else{
console.log('Connected to MySQL database!');
}
});
// close the MySQL connection
connection.end();