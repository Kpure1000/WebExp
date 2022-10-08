<?php
session_start();
?>
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
        <a id="title">Nimuss Cinema =^_^=</a>
        <script>
            document.getElementById('title').onclick =
                function() {
                    window.location = 'index.php';
                }
        </script>
    </div>
    <form id="form" action="php/login_msg.php" method="post" onsubmit="return checkSubmit(1);">
        <div class="login" id="with_phone">
            <span class="subtitle">
                Login with message~
                <a href="login.php" style="font-size: 14px;">or with username</a>
            </span>
            <input class="info_text" id="phonenumber" type="text" name="phonenumber" placeholder="phone number" />
            <br />
            <input class="feed_text" id="checkingcode" type="text" name="feedback" placeholder="checking code" />
            <input class="send_buttom" id="sendbt" type="submit" name="submit_send" value="send" />
            <br />
            <input class="login_buttom" id="submitbt" type="submit" name="submit" value="sign in~" />
            <span class="regist">
                Don't have account?
                <br>
                <a href="regist.php">Regist</a>
                <a href="forgetpass.php" class="wj">Forgotten Password~</a>
            </span>
        </div>
    </form>
    <script src="js/login_shift.js"></script>
</body>

</html>