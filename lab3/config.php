<?php

// Дані для підключення до БД.
$server = "sql11.freemysqlhosting.net";
$username = "sql11459528";
$password = "B6eA6MAJnX";
$dbname = "sql11459528";

// Підключення до БД.
$connect = mysqli_connect($server, $username, $password, $dbname);

// Кодування БД.
mysqli_set_charset($connect, 'utf8');


// host: "sql11.freemysqlhosting.net",
// user: "sql11459528",
// database: "sql11459528",
// password: "B6eA6MAJnX"

// Server: sql11.freemysqlhosting.net
// Name: sql11459528
// Username: sql11459528
// Password: B6eA6MAJnX
// Port number: 3306
?>
