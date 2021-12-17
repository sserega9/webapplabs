<?php

   include "config.php";

    if (isset($_POST["item"]) && $_POST["item"] != "") {

          $sql_add = "INSERT INTO items (item) VALUES ('" .$_POST["item"]. "')";

          mysqli_query($connect, $sql_add);

       }



 ?>