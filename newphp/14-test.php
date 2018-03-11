<?php
    if(isset($_POST["sub"])){
        $sub=$_POST["sub"];
        $row=$_POST["row"];
        $col=$_POST["col"];
        echo "<table align='right' border=1>";
        echo "<h3 align='right'>用户动态输出表格.行$row,列$col</h3>";
        for($i=0;$i<$col;$i++){ 
            if($i%2==0){
                $color="red";
            }else{
                $color="blue";
            }
            echo "<tr bgColor=$color>";
            for($j=0;$j<$row;$j++){
                echo "<td>";
                echo $j;
                echo "</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    

?>
<meta charset="utf-8">
<h3>输入行列生成表格</h3>
<form action="14-test.php" method="post">
    输入行：<input type="text" name="row">
    <br>
    输入列：<input type="text" name="col">
    <br>
    <input type="submit" value="生成表格" name="sub">
    <input type="submit" value="重置行列" name="reset">
</form>