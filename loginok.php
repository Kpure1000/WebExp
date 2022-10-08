<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LoginOK</title>
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
    <div class="login">
        <span class="subtitle" id="info">
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
            username = getCookie("user");
            if (username.length > 0)
                document.getElementById('info').textContent = "用户: '" + getCookie("user") + "' 在线";
            else
                document.getElementById('info').textContent = "未登录";
        </script>
        </span>
    </div>
</body>
</html>