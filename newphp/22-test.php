<?php
    echo "随即输出5个随机数";
    echo "<br />";
    while(count($arr)<5){
        $arr[]=rand(0,9);
        $arr=array_unique($arr);
    }
    echo "随机数：".implode("&nbsp;",$arr);
    echo "<p style='color:red'>范围0^9不重复</p>";
?>
