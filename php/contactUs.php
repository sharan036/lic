<?php
include 'conn.php';

if(isset($_POST['name'])){

    $data = array();  
    $from_ip = $_SERVER['REMOTE_ADDR'];
    $from_browser = $_SERVER['HTTP_USER_AGENT'];
    date_default_timezone_set("Asia/Calcutta");
    $date_now = date("r");

    $name = mysqli_real_escape_string($link, $_POST['name']);
    
    $email = mysqli_real_escape_string($link, $_POST['email']);
    $phone = mysqli_real_escape_string($link, $_POST['phone']);
    $subject = mysqli_real_escape_string($link, $_POST['subject']);
    $message = mysqli_real_escape_string($link, $_POST['message']);

    $id = 0;

    $result = mysqli_query($link, "SELECT max(id) FROM `contact_form`");

    while ($row = mysqli_fetch_array($result)) {
        $id = $row[0];  
    }
    $id = $id + 1;
    
    $query = "INSERT INTO `contact_form` (`id`,`name`, `phone`, `email`, `subject`, `time`,`from_ip`, `from_browser`, `message`) VALUES ('$id','$name', '$phone', '$email', '$subject','$date_now', '$from_ip', '$from_browser', '$message')";
    
    if($result = mysqli_query($link, $query)) {  
           
        $data['status'] = 201;
        echo json_encode($data);
    
    }else{  
        $data['status'] = 301;
        $data['error'] = $link -> error;
        echo json_encode($data);
    }
}
?>