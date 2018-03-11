<?php
    if(isset($_POST["sub"])){
        echo $sub=$_POST["sub"];
        
        $arr = array($_POST["title"],$_POST["content"],$_POST["day"]);                                                              
        echo "<pre>";
        print_r($arr);
        echo "</pre>";
        echo "转换字符串结果:".implode(",",$arr);
    }
?>
<meta chaset="utf-8">
<caption><h3>请输出标题内容和日期</h3></caption>
<form action="21-test.php" method="post">
    新闻标题:<input type="text" name="title"><br/>
    新闻内容:<input type="text" name="content"><br/>
    新闻日期:<input type="text" name="day"><br/>
    <input type="submit" name="sub" value="提交">
</form>