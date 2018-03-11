<?php
    echo "<table width=800 align='center' border=1>";
    for($i=0;$i<100;$i++){
        if($i%2==0){
            $color="red";
        }else{
            $color="white";
        }
        echo "<tr bgColor=$color onmouseout=lrow(this) onmouseover=lcol(this)>";
        for($j=0;$j<10;$j++){
            echo "<td>";
            echo $j;
            echo "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
?>
<script>
    var color="";
    function lrow(bg) {
        bg.bgColor=color;
    };
    function lcol(bg) {
        color=bg.bgColor;
        bg.bgColor="green";
    };
</script>