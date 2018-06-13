/*Найти сумму степеней e чисел от 1 до n.
На вход подается число n и степень e, разделенные пробелом.1 <= n, e <= 100
Пример

> node task.js 2 2
> 5*/

function power(basis, num) {
	var temp=0;
	for (i=1; i<=basis;i++){
		temp += Math.pow(i, num);
	}
	return temp;
}

var basis = Number(process.argv[2]);
var num = Number(process.argv[3]);

process.stdout.write(String(power(basis, num)));



		