<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neko room~</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="main_top">
        <ul>
            <li>
                <a href="" class="logo">Neko Room =''=~</a>
            </li>
            <div class="choice">
                <li>
                    <span class="choice_border">
                        <a href="#1">My Cats</a>
                    </span>
                </li>
                <li>
                    <span class="choice_border">
                        <a href="#2">My Feed</a>
                    </span>
                </li>
                <li>
                    <span class="choice_border">
                        <a href="BarCode/BarCodeProductor.html">BarCode</a>
                    </span>
                </li>
                <li>
                    <span class="choice_border">
                        <a href="#3">Neko Store</a>
                    </span>
                </li>
                <li>
                    <span class="choice_border">
                        <a href="#" onclick="getID()">My account</a>
                    </span>
                </li>
                <li>
                    <!-- should be desperated later -->
                    <span class="choice_border">
                        <a href="login.php">Login</a>
                    </span>
                </li>
            </div>
        </ul>
    </div>
    <div class="container" id="container">
        <div id="btn-prev" class="btn-ctrl">&LT;</div>
        <div id="btn-next" class="btn-ctrl">&GT;</div>
        <ul id="inner-list">
            <li><img src="images/img1.jpg" alt="" /></li>
            <li><img src="images/img2.jpg" alt="" /></li>
            <li><img src="images/img3.jpg" alt="" /></li>
        </ul>
        <ul id="dot-list">
        </ul>
    </div>
    <script src="js/main.js"></script>
</body>

</html>