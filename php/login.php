<?php
header("Content-type: text/html; charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];
$phonenum = $_POST['phonenumber'];
$feedback = $_POST['feedback'];
$conn = new mysqli('localhost', 'root', null, 'login');
if ($conn->connect_error) {
    echo 'Database connect failed';
    exit(0);
} else {
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
            echo '<script>window.location="../index.html";</script>';
        } else {
            echo '<script>alert("Username or password wrong or not exist");history.go(-1);</script>';
        }
    } else if ($phonenum != '' || $feedback != '') {
        if (strlen($phonenum) > 22) {
            echo '<script>alert("Phone number length wrong");history.go(-1);</script>';
        }
        if (strlen($feedback) > 4) {
            echo '<script>alert("Check code length wrong");history.go(-1);</script>';
        }
        $sql = "select phone from user where phone = '$_POST[phonenum]'";
        $result = $conn->query($sql);
        $number = mysqli_num_rows($result);
        if ($number) {
            //  TODO : check the feedback
        } else {
            echo '<script>alert("This phone number did not be registed");history.go(-1);</script>';
        }
        echo '<script>alert("Check code wrong");history.go(-1);</script>';
    } else {
        echo '<script>alert("Please input");history.go(-1);</script>';
        exit(0);
    }
}
