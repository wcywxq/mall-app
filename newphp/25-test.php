<?php 
//爬虫获取网页数据
$url = "http://www.baidu.com"; 
$contents = file_get_contents($url); 
//如果出现中文乱码使用下面代码 
//$getcontent = iconv("gb2312", "utf-8",$contents); 
echo $contents; 
?> 
