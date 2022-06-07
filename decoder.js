// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let decodedMessage = ''
for (let l = 0; l < encodedSymbols.length; l++) {
   decodedMessage += symbols[encodedSymbols[l]] +'';
}



/* Техническое задание

Мяу! Я научился шифровать и мне нужна программа расшифровки.

Есть массив symbols, в котором хранится алфавит (буквы и другие символы).

Есть массив encodedSymbols, в котором хранится зашифрованное сообщение. Каждый элемент этого массива — это индекс символа из массива symbols.

Программа дешифровки должна переводить элементы из массива с шифровкой (encodedSymbols) в символы из массива алфавита (symbols) и склеивать из них расшифрованную строку. Эту строку запиши в переменную decodedMessage.

*/