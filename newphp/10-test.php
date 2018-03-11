<?php
	echo "<table width=800 align='center' border='1'>";
	echo "<caption><h3>九九乘法表</h3></caption>";
	for($i=9;$i>=1;$i--){
		echo "<tr>";
		for($j=$i;$j>=1;$j--){
			echo "<td>";
			echo "$j*$i=".$j*$i." ";
			echo "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
?>