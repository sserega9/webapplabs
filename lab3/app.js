import { createRequire } from 'module';
const require = createRequire(import.meta.url);

console.log("Hellow world!");

const express = require("express");
const app = express();

const port = 5000;

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000 Visit http://localhost:5000`);
});

app.get('/',(req,res) => {
    res.send("This is a sample express app")
})

// Конфигурация ----------------------------------------------------------------------

const query = require('express/lib/middleware/query');

const mysql = require('mysql');

const { config } = require('yargs');

const conn = mysql.createConnection({
        host: "sql11.freemysqlhosting.net",
        user: "sql11459528",
        database: "sql11459528",
        password: "B6eA6MAJnX"
});

conn.connect( err => {
    if (err) {
        console.log(err);
        return err;
    } 
    else {
        console.log("DB connected");
    }

})

let call_prod = 'SELECT * FROM `items`';
conn.query(call_prod, (err, result, fild) => {
    console.log(err);
    console.log(result[0]['name']);
    // console.log(fild);
});

conn.end( err => {
    if (err) {
        console.log(err);
        return err;
    } 
    else {
        console.log("DB closed");
    }

})


// const mysql2 = require('mysql2/promise');

// const config = require('./config');

// async function main() {
//     const conn = await mysql2.createConnection(config);
//     const [rows, filds] = await conn.execute('SELECT * FROM `items`');
//     conn.end();
//     return rows;
// }

// async function getvalue() {
//     let a = await main();
//     console.log(a[0]["name"]);
// }
// getvalue()