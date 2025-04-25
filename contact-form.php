<?php
function mailme($to, $subject, $vBody, $from, $format="text/html", $cc="", $bcc="", $fileatt="")
{
$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "X-Priority: 3\n";
$headers .= "X-MSmail-Priority: Normal\n";
$headers .= "X-mailer: php\n";
$headers .= "From: ".$from."\n";
$headers .= "Return-Path: ".$from."\n";
$headers .= "Return-Receipt-To: ".$from."\n"; 

$mail_sent = @mail($to, $subject, $vBody, $headers);

return $mail_sent;
}

 
if($_REQUEST['flsubmit']=='Submit')
{
	$to='sid@imsiddharth.io';  
	//$to='jadav.arav@gmail.com';
	  $subject=$_REQUEST['fsubject'];
	  $vBody=$_REQUEST['flmessage'];
	  $from=$_REQUEST['flemail']; 
	
	
	 
	if(mailme($to, $subject, $vBody, $from))
	{
		 
		
		?>
        <script src="js/jquery.min.js"></script> 
        <script type="text/javascript">
		    window.location.href = 'http://www.imsiddharth.io/contact.html?msg=success';
			 
		</script> 
      
        	
        <?php
	}
	else
	{
		$maildone='Email Does not Sent Please try Again.';	
	}	
	
	
}
else
{
	$maildone='';
}
?>
 
    <?php

?>


 

