function power(basis, num) {
	var temp=0;
	for (i=1; i<=basis;i++){
		var k = 1;
		for (j=1; j<=num; j++){
			k *= i;
		}
		temp += k;
	}
	return temp;
}

var basis = Number(process.argv[2]);
var num = Number(process.argv[3]);

process.stdout.write(String(power(basis, num)));



		