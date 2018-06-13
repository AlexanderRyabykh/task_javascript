/*2. ���� ������

����������� ���� ������ ��� ���������� ���������.
��������� ���� ������ � ������ ����������� ��������, ��������� ������� ��������� �����������.
�� ���� �������� ������ ����� n ��������� �� ASCII �������� ���� s (�������� ������) � ��������������� �������� ������ k, ����������� ��������.
�������� ����������� �������� � ���������� [A-Z] � [a-z], �� �� � [A-Za-Z]

s in ASCII
1 <= n <= 10000
0 <= k <= 10000
������

> node task.js GeekBrains 3
> JhhnEudlqv
*/

function shift(line, move) {
	var new_line = "";
	for(i=0; i<line.length; i++) {
		var symbol = line[i].charCodeAt();
		symbol += move;
		symbol = String.fromCharCode(symbol);
		new_line += symbol;
	}
	return new_line;
}

var line = process.argv[2];
var move = Number(process.argv[3]);

process.stdout.write(shift(line, move));