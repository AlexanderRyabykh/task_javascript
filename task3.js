/*������� 2 ��������� ���������� � ������� ����� ������������ � ���������������� ����.
� ������ ������������ ����, ������ � ������� (��� �������������).
�� ���� �������� ��� ����� t1 � t2, ����������� ��������. 1 <= t1, t2 <= 100000
������

> node task.js 1 1
> 2 �������

> node task.js 3600 3599
> 1 ��� 59 ����� 59 ������*/

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

