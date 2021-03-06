// форич что-то делает с каждым элементом массива, метод мэп создает новые массив из старого,
// join соединяет массив в строку, сплайс разделяет строку на массив
// редьюс может отработать массив и вернуть одно значение. 

// // метод forEach проходится по массиву один раз, можно использовать только вэлью

const fruits = ['banana', 'apple', 'lemon', 'orange'];

fruits.forEach((value, index, array) => {
  console.log(value);
});


const titles = ['Die hard', 'Terminator'];

const message = titles.join('. ');

// метод join соединяет массив в строку

console.log(message); // 'Die hard. Terminator'

const titles = ['Die hard', 'Terminator'];

const message = titles.join();

console.log(message); // 'Die hard,Terminator'

const titles = ['Die hard'];

const message = titles.join('.');

console.log(message); // 'Die hard', а не 'Die hard.'

// метод .slice склиевает диапазон если не указать диапазон дойдет до конца slice(начало, конец)

const films = ['Die hard', 'Terminator', 'Kindergarten Cop']; 

console.log(films.slice()); // ['Die hard', 'Terminator']


// .map новый массив из одной пары ключ из объектов

const films = [
    {
      id: 0,
      title: 'Die hard',
    },
    {
      id: 1,
      title: 'Terminator',
    },
  ];
  
  const titles = [];
  
  films.forEach((film, index) => {
    titles[index] = film.title;
  });
  
  console.log(titles); // ["Die hard", "Terminator"];

  const films = [
    {
      id: 0,
      title: 'Die hard',
    },
    {
      id: 1,
      title: 'Terminator',
    },
  ];
  
  const titles = films.map((film) => {
    return film.title;
  });
  
  console.log(titles); 
  // ["Die hard", "Terminator"]

// Метод .concat() используется для склеивания двух и более массивов в один.

// первый_массив.concat(второй_массив[, третий_массив])

const ivanFavoriteFilms = ['Die hard', 'Terminator'];
const mariaFavoriteFilms = ['Kindergarten Cop'];

const favoriteFilms = ivanFavoriteFilms.concat(mariaFavoriteFilms);

console.log(favoriteFilms); 
// ['Die hard', 'Terminator', 'Kindergarten Cop']


// Метод массива .reverse() «переворачивает» массив с ног на голову, то есть располагает элементы в том же массиве в обратном порядке. Рассмотрим на примере массива с числами:

const numbers = [0, 1, 2, 3, 4];
const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // [4, 3, 2, 1, 0]
console.log(numbers); // [4, 3, 2, 1, 0]
// ...
// Так как элементы переставляются в исходном массиве, результат работы метода — ссылка на этот исходный массив:

// ...
console.log(numbers === reversedNumbers); // true
// Такие методы ещё называют мутирующими, и чтобы избежать неожиданных мутаций, используют метод .slice():

const numbers = [0, 1, 2, 3, 4];
const reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers); // [4, 3, 2, 1, 0]
console.log(numbers); // [0, 1, 2, 3, 4]
console.log(numbers === reversedNumbers); // false


// Метод .find() позволяет решить одну из самых часто возникающих задач при работе с массивами — 
// осуществить поиск элемента. Раз массивы позволяют хранить наборы значений, то рано или поздно может потребоваться 
// найти значение, которое соответствует определённому условию.

// Метод .find() как и другие методы аргументом принимает функцию, которая будет вызвана для каждого элемента массива, пока не найдётся элемент, который удовлетворяет условию. Как только такой элемент будет найден, метод .find() прекратит работу и вернёт найденный элемент.

// массив.find((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})
// Рассмотрим метод .find() на примере поиска подстроки в массиве:

const titles = ['Die hard', 'Terminator'];

const favoriteFilmTitle = titles.find((title) => title.includes('hard'));

console.log(favoriteFilmTitle); // 'Die hard'
// Что за метод .includes()
// Свои методы для работы есть не только у массивов, но и у других сущностей в JavaScript, подробнее мы поговорим о них в отдельном разделе курса.

// А метод .includes() в данном случае — это метод строк String в JavaScript (title — это элемент массива titles, то есть строка).

// .includes() позволяет проверить, содержит ли строка другую строку. Если выражаться академически, мы ищем вхождение подстроки:

// 'строка'.includes('подстрока')
// Например:

'Die hard'.includes('hard'); // true
// Это читается как «Содержит ли строка 'Die hard' подстроку 'hard'?» Ответ, очевидно, «Содержит», поэтому результатом вызова метода будет true. Иначе было бы false:

'Terminator'.includes('hard'); // false
// Но что вернёт функция, если в массиве есть несколько элементов, удовлетворяющих условию? Ответ прост: первый элемент, который соответствует условию. После этого работа метода будет прервана. А если метод .find() не найдёт ни одного элемента, удовлетворяющего условию, функция вернёт undefined.

// findIndex
// Метод работает один в один как .find(), только результатом вернёт не найденный элемент, а его индекс в массиве.

// массив.findIndex((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})
// Например:

const titles = ['Die hard', 'Terminator'];

const favoriteFilmTitleIndex = titles.findIndex((title) => title.includes('hard'));

console.log(favoriteFilmTitleIndex); // 0

// Может показаться, что .reduce() — ещё один метод, позволяющий перебрать содержимое массива, но его основная задача — свернуть массив, то есть из набора значений получить одно. Это значение может быть произвольного типа. За счёт этой возможности метод .reduce() становится мощным инструментом, позволяющим решить множество разных задач.

// Перед тем как познакомиться с примером, давайте рассмотрим аргументы самого метода:

// массив.reduce(колбэк_функция[, начальное_значение_результата]);
// В отличие от других методов массива .reduce() может принимать второй аргумент — начальное значение результата, 
// а точнее результирующего значения, того, что мы получим по итогу работы метода. 
// Этот аргумент опциональный (в описании такие оборачиваются [, ]), его можно передать:

[1, 2, 3].reduce(() => {}, 0);
// А можно не передавать:

[1, 2, 3].reduce(() => {});
// Что будет, если его не передать, расскажем в конце главы.

// Теперь разберём параметры колбэк-функции:

// (результирующее_значение, текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_сам_массив) => {};
// Их аж четыре:

// результирующее_значение — параметр, через который передаётся предыдущий результат выполнения функции, 
// таким образом этот параметр «кочует» от перебора одного элемента к перебору другого. Та отличительная особенность 
// .reduce() от других методов;
// текущий_элемент_массива — элемент массива, для которого вызывается колбэк-функция;
// индекс_текущего_элемента и ссылка_на_сам_массив — тут должно быть понятно без лишних слов.
// Рассмотрим применение метода .reduce() на практическом примере — подсчёт суммы. Для наглядности опишем задачу 
// так: есть корзина с товарами (массив), где каждый товар представлен объектом с несколькими ключами: 
// title (название товара), quantity (количество) и price (цена). Наша задача заключается в подсчёте общей суммы 
// стоимости всех товаров, и в этом нам поможет метод .reduce():

const goods = [
  {
    title: 'Кукуруза',
    quantity: 3,
    price: 99,
  },
  {
    title: 'Корм для кота',
    quantity: 2,
    price: 113,
  },
];

const sum = goods.reduce((total, product) => total + (product.quantity * product.price), 0);

console.log(sum); // 523
// В этом примере мы посчитали общую сумму стоимости всех товаров и для этого нам потребовалась одна строчка кода, 
// никаких дополнительных переменных как в случае с .forEach() или for-циклом.

// Как это работает? Метод .reduce() вызывает переданную функцию для каждого элемента массива. Результат выполнения 
// этой функции доступен на следующей итерации через параметр total. Для первой итерации значение total будет 0, 
// потому что мы передали его вторым аргументом в сам .reduce(). После завершения всех итераций значение total 
// станет результатом выполнения .reduce().

// Что происходит внутри колбэк-функции? Она задаёт новое результирующее значение. Не изменяет, а именно задаёт новое! 
// Да, на основе предыдущего, потому что мы прибавляем к результату прошлой итерации произведение количества товара и 
// его стоимости.

// Метод .reduce() штука сложная, поэтому давайте ещё раз разберём, как будет выполняться этот код, но уже по шагам.

// На первой итерации результирующим значением будет 0 — мы определили его самостоятельно, передав вторым аргументом 
// в метод .reduce(). Получается, что на первой итерации выражение будет таким:

// 0 + (3 * 99) = 297;
// Это мы посчитали стоимость первого товара («Кукуруза»).

// На второй итерации мы переходим к следующему товару — «Корм для кота». На этот раз значением total будет 297 — 
// результат выполнения функции на прошлой итерации — и к этому значению мы прибавляем стоимость второго товара:

// 297 + (2 * 113) = 523;
// Поскольку больше элементов в массиве нет, метод .reduce() завершит работу и вернёт значение total, поэтому 
// результатом выполнения .reduce() будет 523.

// Что будет, если не передать начальное значение результата?
// Если забыть или нарочно не передать второй аргумент в .reduce(), тогда он начнёт обход массива со второго элемента, 
// а начальным значением возьмёт первый элемент:

['x', 'y'].reduce((total, current, index) => {
  console.log(total); // 'x'
  console.log(current); // 'y'
  console.log(index); // 1
});
// Из примера видно, что .reduce() начал работу сразу с 'y', а результирующим значением для первой проходки взял 'x'.

// Это не ошибка, а заложенное поведение. Удобно, когда вам нужно просуммировать элементы массива — числа:

[5, 2, 3].reduce((total, current) => total + current); // 10
// Результат будет аналогичный «полной» записи:

[5, 2, 3].reduce((total, current) => total + current, 0); // 10

const members = [['Саша', 'Игорь'], ['Лидия', 'Сергей']];

members.forEach(() => {
  members.forEach((member) => {
    console.log(member);
  })
});

members.forEach((element) => {
    console.log(element)
})
//ввыедет два массива по отдельности

members.forEach((elements) => {
    elements.forEach((element) => {
        console.log(element)
    })
})


// //Саша
// Игорь
// Лидия
// Сергей
