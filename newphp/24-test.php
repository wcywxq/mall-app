<table width="400" border="1" cellspacing="0" cellpadding="0" >
<?php
#生成20注
for ($n=1;$n<=20;$n++) {
    echo "<tr><td bgcolor=#cccccc width=80>第".$n."注 </td>";
    $string="";//初始化字符串
    ##生成7个号码
    for ($i=1;$i<=7;$i++) {
        $random=mt_rand(1,30);//产生1-30间的随机数
        if (preg_match($random,$string)){//检查此数是否已经存在$i–;
            continue;//跳出循环，回到判断起始处。
        }
        $string=$string.",".$random;
        echo "<td bgcolor=#efefef>";
        echo $random," ";
    }
        echo "</td></tr>";
}
?>
</table>