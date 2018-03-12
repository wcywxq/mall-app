<?php
	echo file_get_contents("test.txt");
	if(isset($_POST["agree"])){
        $agree=$_POST["agree"];
        $disagree=$_POST["disagree"];
        echo $agree;
        echo $disagree;
    }


?>
<meta charset"utf-8">	
<form action="next.php" method="post">
    <input type="submit" name="agree" value="同意注册">
</form>
<form action="index.php" method="post">
    <input type="submit" name="disagree" value="我不同意">
</form>