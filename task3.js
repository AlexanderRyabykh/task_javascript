/*Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
В выводе использовать часы, минуты и секунды (при необходимости).
На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000
Пример

> node task.js 1 1
> 2 секунды

> node task.js 3600 3599
> 1 час 59 минут 59 секунд*/

function TimeTransform(t) {
	var secs = t % 60;
	var mins = ((t - secs)/60)%60;
	var hrs = ((t - secs)/60 - mins)/60;
	return [hrs, mins, secs];
}

var t1 = process.argv[2];
var t2 = process.argv[3];
var sum = Number(t1) + Number(t2);

if (t1>100000 || t2>100000 || t1 < 0 || t2 < 0) {
	process.stdout.write("Wrong data");
}
else {
sum = TimeTransform(sum);
process.stdout.write(sum[0] + " hrs " + sum[1] + " mins " + sum[2] + " secs");
}

