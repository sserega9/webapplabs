<?php 

    include "config.php";

    $sql_items = "SELECT * FROM items";

    $result_items = mysqli_query($connect, $sql_items);

    $numOfItems = mysqli_num_rows($result_items);

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 3</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/svg+xml" href="../img/favicon.svg" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .topnav {
          background-color: #333;
          overflow: hidden;
        }
        .topnav a {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }
        .topnav a:hover {
          background-color: #ddd;
          color: black;
        }
        .topnav a.active {
          background-color: #04AA6D;
          color: white;
        }
        .topnav .icon {
          display: none;
        }
    </style>
</head>


<body>
    <div class="wrap">
        <header>
            <input type="text" value="x">
            <p id="text-header">Header</p>
        </header>
        <div class="content">
            <div class="left-block">
                <div class="wrap-block">
                    <div class="wrap-endl">
                        <div class="block-menu-left">
                            <div class="block-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam facere esse! Incidunt, cumque. Dolorum deleniti fugiat ullam, alias, reprehenderit perspiciatis provident, necessitatibus cupiditate assumenda voluptate id doloribus tenetur sequi.
                            </div>
                        </div>
                        <div class="content-big-block">
                              <div class="topnav" id="myTopnav">
                            <?php 

                                $i = 0;

                                while ($i < $numOfItems) {
                                    
                                    $item = mysqli_fetch_assoc($result_items);

                                    echo $item['item'];

                                    $i++;
                                }

                            ?>
                               <!--  <a href="#home" class="active">Home</a>
                                <a href="#news">News</a>
                                <a href="#contact">Contact</a>
                                <a href="#about">About</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                  <i class="fa fa-bars"></i>
                                </a> -->
                              </div>
                              <div>
                                <form methot="post" action="create.php"><br>
                                  <input type="text" id="add_item"><br>
                                  <button id="btn_add">Додати новий елемент в меню</button>
                                </form>
                              </div>
                        </div>
                    </div>
                </div>
                <div class="wrap-endl-bottom">
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam facere esse! Incidunt, cumque. Dolorum deleniti fugiat ullam, alias, reprehenderit perspiciatis provident, necessitatibus cupiditate assumenda voluptate id doloribus tenetur sequi.
                    </span>
                </div>
            </div>
            <div class="right-block">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam facere esse! Incidunt, cumque. Dolorum deleniti fugiat ullam, alias, reprehenderit perspiciatis provident, necessitatibus cupiditate assumenda voluptate id doloribus tenetur sequi.
            </div>
        </div>
        <footer>
            <input type="text" value="y">
            <p id="text-bottom">Header</p>
        </footer>
    </div>

    <script src="./script.js"></script>
    
</body>
</html>