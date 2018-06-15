/*2. ���� ������

����������� ���� ������ ��� ���������� ���������.
��������� ���� ������ � ������ ����������� ��������, ��������� ������� ��������� �����������.
�� ���� �������� ������ ����� n ��������� �� ASCII �������� ���� s (�������� ������) � ��������������� �������� ������ k, ����������� ��������.
�������� ����������� �������� � ���������� [A-Z] � [a-z], �� �� � [A-Za-Z]

s in ASCII
1 <= n <= 10000
0 <= k <= 10000
������

>  node task.js GeekBrains 3
>  JhhnEudlqv
*/

var a = "a".charCodeAt();
var z = "z".charCodeAt();
var A = "A".charCodeAt();
var Z = "Z".charCodeAt();

function shift(line, move) {
	var new_line = "";
	move = move % 26;
	for(i=0; i<line.length; i++) {
		var symbol = line[i].charCodeAt();
		if (symbol >= a && symbol <= z) {
			symbol += move;
		}
		else if (symbol >= A && symbol <= Z){
			symbol += move;
		}	
		else {
			return "Wrong input";
		}
		symbol = String.fromCharCode(symbol);
		new_line += symbol;
	}
	return new_line;
}

var line = process.argv[2];
var move = Number(process.argv[3])

process.stdout.write(shift(line, move));