<?php   
    echo "<div style='background:#eee'><h3 align=center style='color:#000'>福利彩票号码自动生成器</h3></div>";
    if(isset($_POST["btn"])){
        for($i=1;$i<=5;$i++){
            $arr=array();
            while(count($arr)<7){
                $arr[]=mt_rand(1,30);
                $arr=array_unique($arr);
            }
            // echo $i; 
            echo "第".$i."注：".implode(",",$arr); 
            echo "<br />";
        }
    }
?>
<meta chaset="utf-8">
<html>
<body style="background:#00d6ff">
    <form action="23-test.php" method="post">
        <input type="submit" style='color:red' align=center value="单击生成新的号码" name="btn">    
    </form>
</body>
</html>