<?php
$primes = array(2);
$x = 100000;
$n = 1;

function is_prime($n){
	global $primes;
	if ($n == 1){
		return false;
	}
	$maxd = floor(sqrt($n));
	for ($d = 2; $d <= $maxd + 2; $d++){
		if (fmod($n, $d) == 0){
			break;
		}else if (fmod($n, $d) != 0 && $d == $maxd + 1){
			array_push($primes, $n);
		}else {
			continue;
		}
	}
}

$date1 = time();
while (count($primes) < $x){
	is_prime($n);
	$n += 2;
}
$date2 = time();
$myfile = fopen("phpPrimes.txt", "w") or die ("Unable to openfile!");
for ($i = 0; $i < count($primes); $i++){
	$txt = $primes[$i];
	$txt .= "\n";
	fwrite ($myfile, $txt);
}
fclose($myfile);
$t = $date2 - $date1;
echo "Calculated ". $x ." primes in ". $t ." seconds \n";
?>
