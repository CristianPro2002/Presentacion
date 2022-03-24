const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'banca',
})

conection.connect( (err)=>{
    if(err) throw err
    console.log('La conexion funciona')
})

const insertar =
"INSERT INTO usuarios (IdUsuario,usuario,contraseña) VALUES ('3', 'Sonia', 'Sonia123')";
conection.query(insertar, (err, rows) =>{
    if(err) throw err;
});

conection.query("SELECT * from usuarios", (err, rows)=>{
    if(err) throw err;
    console.log("Los datos de la tabla son: ");
    console.log(rows);
    console.log("La cantidad de resultado es: ");
    console.log(rows.lenght);
});


conection.end();

