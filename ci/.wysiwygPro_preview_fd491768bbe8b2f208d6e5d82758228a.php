<?php
if ($_GET['randomId'] != "2Sh4bdSAVtqvEAKwYcR6qUnHbtUKKKNq7JbmxFNVxABS5DLia6_ID700v1ScGuMd") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
