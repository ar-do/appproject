<?php

$mysqli = new mysqli("localhost","root","","appproject");

$username = $_GET['username'];
$sql = "SELECT UserID, username, password FROM users where username='".$username."'";
$result = $mysqli->query($sql);
$output = $result->fetch_assoc();

echo json_encode(array("username" => $output["username"],"password" => $output["password"]));


?>