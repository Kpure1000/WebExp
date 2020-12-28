<?php 
session_start(); 
header("Content-type: text/html; charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];
$repassword = $_POST['repassword'];
if ($username == '') {
    echo '<script>alert("Please input user name");history.go(-1);</script>';
    exit(0);
}
if ($password == '') {
    echo '<script>alert("Please input passsword");history.go(-1);</script>';
    exit(0);
}
if ($password != $repassword) {
    echo '<script>alert("The two passwords are inconsistent");history.go(-1);</script>';
    exit(0);
}
if ($password == $repassword) {
    $conn = new mysqli('localhost', 'root', null, 'login');
    if ($conn->connect_error) {
        echo 'Database connect failed';
        exit(0);
    } else {
        $id = 10000;
        $sql_getid = "select MAX(id) from user";
        $res_id = $conn->query($sql_getid);
        if ($res_id->num_rows > 0) {
            $row_id = $res_id->fetch_assoc();
            $id = $row_id["MAX(id)"] + 1;
        }
        $sql = "select name from user where name = '$username'";
        $result = $conn->query($sql);
        $number = mysqli_num_rows($result);
        if ($number) {
            echo '<script>alert("This name has been registed!");history.go(-1);</script>';
        } else {
            $sql_insert = "insert into user (id,name,pass,reg_time) values($id,'$username','$password',now())";
            $res_insert = $conn->query($sql_insert);
            if ($res_insert) {
                $_SESSION['current_id'] = $id;
                echo '<script>window.location="../index.html";</script>';
            } else {
                echo "<script>alert('System busy!');</script>";
            }
        }
    }
} else {
    echo "<script>alert('Regist failed!'); history.go(-1);</script>";
}
