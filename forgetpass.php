<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgotten password</title>
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
    <form id="form" action="php/forgetpass.php" method="post" onsubmit="return checkSubmit();">
        <div class="login" id="with_phone">
            <span class="subtitle">
                Forgotten password >_<
            </span>
            <input class="info_text" id="username" type="text" name="username" placeholder="nick name" />
            <br />
            <input class="info_text" id="phonenumber" type="text" name="phonenumber" placeholder="phone number" />
            <br />
            <input class="info_text" id="newpassword" type="text" name="newpassword" placeholder="new password"/>
            <br />
            <input class="feed_text" id="checkingcode" type="text" name="feedback" placeholder="checking code" />
            <input class="send_buttom" id="sendbt" type="submit" name="submit_send" value="send" />
            <br />
            <input class="login_buttom" id="submitbt" type="submit" name="submit" value="modify~" />
            <span class="regist">
                Don't have account?~
                <br>
                <a href="regist.php">Regist~</a>
            </span>
        </div>
    </form>
    <script src="js/forgetpass.js"></script>
</body>

</html>