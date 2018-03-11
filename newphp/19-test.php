<?php
    if(isset($_POST["sub"])){
        $sub=$_POST["sub"];
        $guessing=$_POST["guessing"];
        $computer=$_POST["computer"];
        $a=array("拳头"=>"石头","剪子"=>"剪刀","布"=>"出布");
        echo "出的是"."$guessing";
        if(($guessing=="拳头" && $computer=="剪子")||($guessing=="剪子" && $computer=="布")||($guessing=="布" && $computer=="拳头")){
            echo "&nbsp;你获胜";
        }
        if(($guessing=="拳头" && $computer=="拳头")||($guessing=="布" && $computer=="布")||($guessing=="剪子" && $computer=="剪子")){
            echo "&nbsp;平局";
        }
        if(($guessing=="拳头" && $computer=="布")||($guessing=="剪子" && $computer=="拳头")||($guessing=="布" && $computer=="剪子")){
            echo "&nbsp;你输了";
        }
        echo "<br>";
        
    }    
?>
<meta chaset="utf-8">
<form action="19-test.php" method="post">
    <span>你出拳</span>
    <select name="guessing">
        <option value="拳头" <?php echo $guessing=="拳头"?"selected":"" ?>>拳头</option>
        <option value="剪子" <?php echo $guessing=="剪子"?"selected":"" ?>>剪子</option>
        <option value="布" <?php echo $guessing=="布"?"selected":"" ?>>布</option>
    </select>  
    <br>
    <span>
        电脑出拳
    </span>
    <select name="computer">
        <option value="<?php print_r(array_rand($a))?>">
             
        </option>
    </select> 
    <input type="submit" value="提交" name="sub">
</form>



        