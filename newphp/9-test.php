<?php
	echo "<table width=800 align='center' border='1'>";
	echo "<caption><h3>九九乘法表</h3></caption>";
	for($i=1;$i<=9;$i++){
		echo "<tr>";
		for($j=1;$j<=$i;$j++){
			echo "<td>";
			echo "$j*$i=".$j*$i." ";
			echo "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
?>