<?php
	if(isset($_GET["sub"]))
	{
		$flag="true";
	 	$num1=$_GET['num1'];
		$num2=$_GET['num2'];
		$ysf=$_GET['ysf'];
		$message="";
		if($num1==""){
			$flag=="false";
			$message="第一个数字不能为空";
		}
		if($num2==""){  
            $flag="false";  
            $message="第二个数字不能为空";  
         }  
  
        if(!is_numeric($num1)){  
        	$flag="false";
            $message="第一个数应该是数字";             
        }  
  
        if(!is_numeric($num2)){  
        	$flag="false";  
            $message="第二个数应该是数字";             
        }  
		if($flag){
			$sum=0;
			switch ($ysf) {
				 case '+':
					 $sum=$num1+$num2;
					 break;
				 case '-':
					 $sum=$num1-$num2;
					 break;
				 case '×':
				     $sum=$num1*$num2;
					 break;
				 case '/':
					 $sum=$num1/$num2;
					 break;
				 case '%':
					 $sum=$num1%$num2;
					 break;
				 default:
					 echo "输出有误";
		 	}
		}
	 
	} 
?>
<meta charset="utf-8">
<table width=100 align='center' border=1>
<caption><h1>计算器</h1></caption>
<form action="calculator.php" method="get">
        <td>
        	<input type="text" name="num1"></input>
        </td>
        <td>
        	<select name="ysf">
        		<option value="+" <?php echo $ysf=="+"?"selected":"" ?>>+</option>
        		<option value="-" <?php echo $ysf=="-"?"selected":"" ?>>-</option>
        		<option value="×" <?php echo $ysf=="×"?"selected":"" ?>>×</option>
        		<option value="/" <?php echo $ysf=="/"?"selected":"" ?>>/</option>
        		<option value="%" <?php echo $ysf=="%"?"selected":"" ?>>%</option>
        	</select>
        </td>
        <td>
        	<input type="text" name="num2"></input>
        </td>
        <td>
        	<input type="submit" name="sub" value="计算"></input>
        </td>
        <?php
			if(isset($_GET["sub"]))
			{
				echo "<tr>";
				echo "<td colspan='4'>";
				if($flag=="true"){					
					echo "结果为:".$num1."$ysf".$num2."=".$sum;						
				}else{
					echo "$message";
				}
				echo "</td>";
				echo "</tr>";
			}
		?>
</form>
</table>
