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
                        <a href="./doc/doc.html">Documents</a>
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
                        <a href="./DyGraphEva/vis/index.html">DyGraphEva</a>
                    </span>
                </li>
                <li>
                    <span class="choice_border">
                        <a href="login.php">Login</a>
                    </span>
                </li>
                <li>
                    <span class="choice_boder">
                        <a href="#1" onclick="getID()" id="myaccount"></a>
                    </span>
                    <script>
                        function getCookie(cname) {
                            var name = cname + "=";
                            var decodedCookie = decodeURIComponent(document.cookie);
                            var ca = decodedCookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return "";
                        }
                        user = getCookie("user");
                        if(user.length > 0)
                            {
                                document.getElementById("myaccount").textContent = user;
                            }
                        else
                            document.getElementById("myaccount").textContent = "MyAccount";
                    </script>
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