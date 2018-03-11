<?php
    for($i=1;$i<=9;$i++){
        echo "<br>";
        if($i%4==0){
            break;
        }
        for($j=1;$j<=$i;$j++){
            // if($j%3==0){
            //     continue;
            // }
            if($j%3==0){
                break;
            }
            echo "$i*$j"."=".$i*$j." &nbsp;&nbsp;&nbsp;";
        }
    }
?>