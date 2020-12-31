<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyLogin</title>
    <link rel="stylesheet" href="css/login_style.css">
</head>

<body>
    <div class="top">
        <a id="title">Neko Room =''=~</a>
        <script>
            document.getElementById('title').onclick =
                function() {
                    window.location = 'index.php';
                }
        </script>
    </div>
    <form id="form" action="php/login.php" method="post" onsubmit="return checkSubmit(0);">
        <div class="login" id="with_name">
            <span class="subtitle">
                Login with username~
                <a href="login_msg.php" style="font-size: 14px;">or with message</a>
            </span>
            <input class="info_text" id="username" type="text" name="username" placeholder="nick name / phone number" />
            <br />
            <input class="info_text" id="password" type="password" name="password" placeholder="password" />
            <span>(6~20)</span>
            <br />
            <input class="login_buttom" type="submit" name="name_submit" value="sign in ~" />
            <span class="regist">
                Don't have account?~
                <br>
                <a href="regist.php">Regist~</a>
                <a href="forgetpass.php" class="wj">Forgotten Password~</a>
            </span>
        </div>
    </form>
    <script src="js/login_shift.js"></script>
</body>

</html>