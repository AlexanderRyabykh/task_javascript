/*����� ����� �������� e ����� �� 1 �� n.
�� ���� �������� ����� n � ������� e, ����������� ��������.1 <= n, e <= 100
������

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



		