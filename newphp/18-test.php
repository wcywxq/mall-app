<?php
    for($i=1;$i<=5;$i++){
        echo "<br/>";
        for($k=5-$i;$k>=1;$k--){
            echo "&nbsp";
        }
        if(($i == 1) || ($i == 5)){
            for($j=1;$j<=2*$i-1;$j++){
                echo "*";
            }
            
        }else{
            echo "*";
            for($k=1;$k<=2*$i-3;$k++){
                echo "&nbsp;";
            }
            echo "*";
        }
    }
?>