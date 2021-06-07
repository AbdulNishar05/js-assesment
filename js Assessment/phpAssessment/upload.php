<?php
$servername = "localhost";
$username = "root";
$password = "Admin@123";
$dbname = "plp";
$output = '';
$rec_id = $_POST['Id'];
 $connection = mysqli_connect($servername, $username, $password, $dbname);
 

$sql = "SELECT * FROM products where id=".$rec_id;
$result = mysqli_query($connection, $sql);

 

   while($row = mysqli_fetch_assoc($result)) {
 
$output .= "<div class='row'><div class='col-sm-6'>Id: ".$row["Id"]."</div><div class='col-sm-6'>Name ".$row["Name"]."</div></div><div class='row'> <div class='col-sm-6'>Gender: ".$row["Sku"]."</div></div><div class='row'><div class='col-sm-6'>Designation: ".$row["Description"]."</div><div class='col-sm-6'>age: ".$row["Price"]."</div></div><div class='row'><div class='col-sm-12'><img src='".$row["image"]."' style='height:100px;width:100px;text-align:Center'></div></div>";

 }
echo $output;
 
mysqli_close($connection);
?>