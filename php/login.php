<?php
header("Content-type: text/html; charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];
$bt_send = $_POST['send'];
$bt_submit = $_POST['msg_submit'];
$conn = new mysqli('localhost', 'root', null, 'login');
if ($conn->connect_error) {
    echo 'Database connect failed';
    exit(0);
} 
else {
    if ($username != '' || $password != '') {
        if (strlen($username) > 30) {
            echo '<script>alert("Username length wrong");history.go(-1);</script>';
        }
        if (strlen($password) < 6 || strlen($password) > 20) {
            echo '<script>alert("Password length wrong");history.go(-1);</script>';
        }
        $sql = "select name,pass from user where name = '$username' and pass = '$password'";
        $result = $conn->query($sql);
        $number = mysqli_num_rows($result);
        if ($number) {
            setcookie("user", $username, time() + 60, '/WebExp');
            echo '<script>window.location="../loginok.php";</script>';
        } else {
            echo '<script>alert("Username or password wrong or not exist");history.go(-1);</script>';
        }
    } else {
        echo '<script>alert("Please input user name");history.go(-1);</script>';
        exit(0);
    }
}
?>