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

var word = [" часа ", " час ", " часов "," минуты ", " минута ", " минут ","  секунды", " секунда ", " секунд"];

if (sum[0] != 0) {
	var temp = [];
	for(i=0;i<=2;i++) {
		if (sum[i]%10 == 2 || sum[i]%10 == 3 || sum[i]%10 == 4){
			temp[i] = word[3*i];
		}
		else if (sum[i]%10 == 1 && sum[i] != 11) {
			temp[i] = word[3*i+1];
		}
		else {
			temp[i] = word[3*i+2];
		}
	}
	process.stdout.write(sum[0] + temp[0] + sum[1] + temp[1] + sum[2] + temp[2]);
}
else if (sum[1] != 0) {
	var temp = [];
	for(i=0;i<=1;i++) {
		if (sum[i+1]%10 == 2 || sum[i+1]%10 == 3 || sum[i+1]%10 == 4){
			temp[i] = word[3*i+3];
		}
		else if ((sum[i]%10 == 1) && (sum[i] != 11)) {
			temp[i] = word[3*i+1+3];
		}
		else {
			temp[i] = word[3*i+2+3];
		}
	}
	process.stdout.write(sum[1] + temp[0] + sum[2] + temp[1]);
}
else {
	if (sum[2]%10 == 2 || sum[2]%10 == 3 || sum[2]%10 == 4){
			temp[0] = word[3*i+6];
		}
		else if (sum[i]%10 == 1 && sum[i] != 11) {
			temp[0] = word[3*i+1+6];
		}
		else {
			temp[0] = word[3*i+2+6];
		}
	process.stdout.write(sum[2] + temp[0]);
}
}