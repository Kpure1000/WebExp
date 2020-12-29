<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyRegist</title>
    <link rel="stylesheet" href="css/regist_style.css">
</head>

<body>
    <div class="top">
        <a id="title">Neko Room =''=~</a>
        <script>document.getElementById('title').onclick =
                function () { window.location = 'index.php'; }</script>
    </div>
    <div class="signup">
        <form action="php/regist.php" method="POST" onsubmit="return checkSubmit()">
            <ul>
                <li>
                    <span class="subtitle">Regist with name~</span>
                </li>
                <li>
                    <span>Nick name: </span>
                </li>
                <li>
                    <input class="info_text" id="username" type="text" name="username" placeholder="nick name">
                </li>
                <li>
                    <span>Phone number: </span>
                </li>
                <li>
                    <input class="info_text" id="phonenum" type="text" name="phonenumber" placeholder="phone number">
                </li>
                <li>
                    <span>Password: </span>
                </li>
                <li>
                    <input class="info_text" id="password" type="password" name="password" placeholder="password">
                </li>
                <li>
                    <span>Re password: </span>
                </li>
                <li>
                    <input class="info_text" id="repassword" type="password" name="repassword" placeholder="re password">
                </li>
                <li>
                    <input class="signup_buttom" type="submit" name="confirm" value="Sign in~">
                </li>
                <li>
                    <span>
                        <a href="login.php" style="font-size: 18px;">back to login</a>
                    </span>
                </li>
            </ul>
        </form>
    </div>
    <script src="js/regist.js"></script>
</body>

</html>