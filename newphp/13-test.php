<?php
    if(isset($_POST["sub"])){
        $sub=$_POST["sub"];
        $grade=$_POST["grade"];
        if($grade>100){
            echo "<script>alert('输入有误');</script>"; 
        }else if($grade>80 && $grade<=100){
            echo "<script>alert('您的成绩为优秀');</script>";
        }else if($grade>60 && $grade<=80){
            echo "<script>alert('您的成绩为合格');</script>";
        }else{
            echo "<script>alert('您的成绩为不合格');</script>";
        }
    };
    if(isset($_POST["reset"])){
        $reset=$_POST["reset"];
    }
?>
<meta charset="utf-8">
<caption><h2>输入分数查询成绩</h2></caption>
<form action="13-test.php" method="post">
    分数：<input type="text" name="grade" value="<?php echo "$grade"?>">
    <br>
    <input type="submit" value="提交查询" name="sub">
    <input type="submit" value="重置分数" name="reset">
</form>