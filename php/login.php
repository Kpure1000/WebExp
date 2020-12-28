<?php
    header("Content-type: text/html; charset=utf-8");
    $username = $_POST['username'];
    $password = $_POST['password'];
    $phonenum = $_POST['phonenumber'];
    $feedback = $_POST['feedback'];
    // $name_sub = $_POST['name_submit'];
    // $msg_sub = $_POST['msg_submit'];
    $conn = new mysqli('localhost','root',null,'login');
    if ($conn->connect_error){
        echo '数据库连接失败！';
        exit(0);
    }else{
        // if ($username == ''){
        //     echo '<script>alert("请输入用户名！");history.go(-1);</script>';
        //     exit(0);
        // }
        // if ($password == ''){
        //     echo '<script>alert("请输入密码！");history.go(-1);</script>';
        //     exit(0);
        // }
        if($username!='' || $password!=''){
            //  TODO: loing with user name
            $sql = "select name,pass from user where name = '$_POST[username]' and pass = '$_POST[password]'";
        }
        if($phonenum!='' || $feedback!=''){
            //  TODO: login with phone number
        }
        else {
            echo '<script>alert("请输入！");history.go(-1);</script>';
            exit(0);
        }
        $result = $conn->query($sql);
        $number = mysqli_num_rows($result);
        if ($number) {
            echo '<script>window.location="../index.html";</script>';
        } else {
            echo '<script>alert("用户名或密码错误！");history.go(-1);</script>';
        }
    }
?>