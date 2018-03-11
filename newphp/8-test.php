<?php
	$i=1;
	while($i<=9){
		$j=1;
		while($j<=$i){
			echo $j."*".$i."=".($j*$i)." ";
			$j++;
		}
		if("$j==$i"){
			echo "<br>";
		}
		$i++;
	}
	/*for($i=1;$i<=9;$i++){
		for($j=1;$j<=$i;$j++){
			echo "$j*$i=".$j*$i." ";
		}
		if("$j==$i"){
			echo "<br>";
		}
	}*/
	
?>