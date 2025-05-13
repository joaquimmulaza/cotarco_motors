<?php
if ($_GET['randomId'] != "N2cWXoCESn40bu8cUEvS90feK3UdWmBcUiLoAttHJA6NOnTjU4dafiIq9BALrpXc") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
