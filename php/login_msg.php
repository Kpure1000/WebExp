<?php
session_start();
ini_set("display_errors", "On");
error_reporting(E_ALL);
header("Content-type: text/html; charset=utf-8");
$phonenum = $_POST['phonenumber'];
$feedback = $_POST['feedback'];

$conn = new mysqli('localhost', 'root', null, 'login');
if ($conn->connect_error) {
    echo 'Database connect failed';
    exit(0);
} else {
    if ($phonenum != '' && $feedback == '') {
        if (strlen($phonenum) > 22) {
            echo '<script>alert("server: Phone number length wrong");history.go(-1);</script>';
        }
        $sql = "select phone from user where phone = '$phonenum'";
        $result = $conn->query($sql);
        $number = mysqli_num_rows($result);
        if ($number) {
            $_SESSION["code"] = strval(rand(1000, 9999));
            $code = $_SESSION["code"];
            require('SmsSendConn.php');
            //南方短信节点url地址
            $url = 'http://api01.monyun.cn:7901/sms/v2/std/';
            $smsConn = new SmsSendConn($url);
            $data = array();
            //您的发送账号E10DTB，密码为zUrAwW，APIKey为1f281e02868ecb6aac5c1a4c485b0030
            //设置账号(必填)
            $data['userid'] = 'E10DTB';
            //设置密码（必填.填写明文密码,如:1234567890）
            $data['pwd'] = 'zUrAwW';
            // 设置手机号码 此处只能设置一个手机号码(必填)
            $data['mobile'] = $phonenum;
            //设置发送短信内容(必填)
            $data['content'] = "验证码：'$code'，打死都不要告诉别人哦！";
            try {
                $result = $smsConn->singleSend($data);
                if ($result['result'] === 0) {
                    echo '<script>alert("Send success!！");history.go(-1);</script>';
                } else {
                    echo '<script>alert("Send failed.");history.go(-1);</script>';
                    exit(0);
                }
            } catch (Exception $e) {
                print_r($e->getMessage());
                echo '<script>alert("Send failed.");history.go(-1);</script>';
                exit(0);
            }
        } else {
            echo '<script>alert("server: This phone number did not be registed");history.go(-1);</script>';
            exit(0);
        }
    } else if ($phonenum != '' && $feedback != '') {
        $feedCode = $_SESSION["code"];
        if ($feedback != $feedCode) {
            echo '<script>alert("server: Check code wrong");history.go(-1);</script>';
            exit(0);
        }
        echo '<script>window.location="../index.php";</script>';
    } else {
        echo '<script>alert("server: Please input phone number");history.go(-1);</script>';
        exit(0);
    }
}
