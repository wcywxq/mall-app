<?php
    $info=array(
        'user'=>array(
            array(1,'zhangsan',19,'male'),
            array(2,'lisi',20,'male'),
            array(3,'wangwu',25,'female')
        ),
        'score'=>array(
            array(1,100,99,10),
            array(2,45,78,50),
            array(3,45,90,78)
        ),
        'content'=>array(
            array(1,110,'aa@bb.com'),
            array(2,220,'cc@dd.com'),
            array(3,330,'gg@hh.com')
        )
    );
    foreach ($info as $key => $value) {
        echo "<table width=500 align='center' border=1>";
        echo "<caption><h3>$key</h3></caption>";
        foreach ($value as $row) {
            echo "<tr>";
            foreach ($row as $col) {
                echo "<td>";
                    echo $col;
                echo "</td>";
        };
            echo "</tr>";
    };
    echo "</table>";
};
?>