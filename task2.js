/*2. Шифр цезаря

Реализовать шифр цезаря для шифрования сообщения.
Применять шифр только к буквам английского алфавита, остальные символы оставлять неизменными.
На вход подается строка длины n состоящая из ASCII символов типа s (исключая пробел) и неотрицательная величина сдвига k, разделенные пробелом.
Смещение выполняется отдельно в множествах [A-Z] и [a-z], но не в [A-Za-Z]

s in ASCII
1 <= n <= 10000
0 <= k <= 10000
Пример

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