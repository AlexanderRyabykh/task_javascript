/*—ложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
¬ выводе использовать часы, минуты и секунды (при необходимости).
Ќа вход подаетс€ два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000
ѕример

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
if (sum[0] != 0) {
	process.stdout.write(sum[0] + " час " + sum[1] + " минут " + sum[2] + " секунд");
}
else if (sum[1] != 0) {
	process.stdout.write(sum[1] + " минут " + sum[2] + " секунд");
}
else {
	process.stdout.write(sum[2] + " секунд");
}
}

