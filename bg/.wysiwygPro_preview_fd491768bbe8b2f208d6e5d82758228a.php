<?php
if ($_GET['randomId'] != "K8yrc1TYa2G8N6RaYmWh1z8VnXSspJ8KrfU2hNXmrJw3luUIlT7l5aIbpMYEm_Ns") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
