<?php
session_start();
include_once('Admin.php');
if (!isset($_SESSION['user']) || (trim($_SESSION['user']) == ''))
{
    header('location:index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" >
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 align="center">Welcome Admin </h1>
    <div align="center">
                
                    <a class="btn btn-info" href="AddParking.php">Add Parking Slot</a>
                 
                    <a class="btn btn-info" href="ViewParking.php">View Parking Slots</a>
                
                    <a class="btn btn-info" href="ViewCustomer.php">View Customer</a>
                  
                    <a class="btn btn-info" href="Wallet.php">Wallet</a>
                  
            </div><br><br>
            <center>
            <a class="btn btn-info" href="logout.php">logout</a>
    </center>
</body>
</html>