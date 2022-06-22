// DOM (Document Object Model) — это объектная модель документа. Разберём определение по частям:

// Объектная — потому что состоит из объектов;
// Модель — слово в прямом своём значении;
// Документ — имеется в виду веб-страница.
// Для примера возьмём простую HTML-страницу:

// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>DOM</title>
//     </head>
//     <body>
//         <h1>Document Object Model</h1>
//         <p>DOM <em>(объектная модель документа)</em> — способ представления разметки страницы в виде связанных между собой объектов</p>
//         <p>Каждому элементу на странице — тегу, текстовому блоку, комментарию — в JS ставится в соответствие объект</p>
//         <p>Каждый из объектов знает про свой родительский объект, соседние объекты и объекты, расположенные внутри него</p>
//         <p>Главный объект, из которого начинают «расти» все остальные элементы DOM-дерева — document.</p>
//     </body>
// </html>
// Проблема в том, что браузер понимает HTML, а JavaScript — нет. И чтобы управлять разметкой из JavaScript, например для добавления интерактивности на страницу, нам нужен специальный инструмент. Этим инструментом является DOM.

// Образно выражаясь, DOM следует воспринимать как некий словарь для JavaScript к HTML-разметке веб-страницы. DOM описывает HTML-структуру объектами JS (теми самыми, которые в фигурных скобках). То есть всю нашу страницу можно представить в виде объекта document. В document есть ключ documentElement, который соответствует корневому элементу документа — тегу html. В documentElement лежит head, body и так далее.

const document = {
    documentElement: {
        head: { /*...*/ },
        body: {
            h1: { /*...*/ },
            p: { /*...*/ },
            p: { /*...*/ },
            p: { /*...*/ },
        }
    }
}
// И тогда доступ к элементу объекта возможен по ключу. Например, к заголовку h1 по пути document.documentElement.body.h1.

// Следует помнить, что DOM — это не просто точное отражение разметки, а сверхточное, содержащее массу полезных вещей, которые позволяют программисту удобно работать с разметкой.

// К таким удобным инструментам в DOM относятся ссылки для быстрого доступа. Например, чтобы получить доступ к узлу body, не обязательно обращаться document.documentElement.body, а можно сразу — document.body. Так же можно поступить, например, с формами — в ключе document.forms будут собраны все формы на странице. И таких ссылок для быстрого доступа существует множество.

// Однако в DOM присутствуют не только теги. Например, после тега body есть перенос строки и табуляция в 4 пробела. Вспомним, как мы пишем код:

// открываем тег <body>,
// далее нажимаем клавишу [ENTER] для переноса строки,
// далее в новой строке нажимаем клавишу [TAB] для отступа,
// и далее, например, открываем тег <h1>,
// затем, перенос строки, табуляция,
// и, к примеру, в <h1> кладём ссылку <a>...
// <body>↵
// ␣␣␣␣<h1>↵
// ␣␣␣␣␣␣␣␣<a href="#" target="_blank">Ссылка</a>
// С тегом <a> тоже всё непросто. У него заданы атрибуты href и target, а ещё есть содержимое — текст. Поэтому с точки зрения DOM ссылка — это отдельный объект. Кстати, так бывает не всегда. Любой тег может быть представлен как примитив, а может как объект. Потому что DOM экономный.

// Теги образуют узлы-элементы, а текст внутри тега образует текстовый узел. Переносы строки, пробелы и табуляция — всё это полноправные текстовые узлы. Даже комментарий является элементом DOM. И вообще всё, что есть в HTML — есть в DOM. Таким образом, HTML-разметка в веб-странице является основой для формирования первоначального, исходного состояния DOM.

// Вернёмся к примеру с ссылкой. У неё есть адрес, куда она ведёт, и текст. Это как минимум. Помимо этого там может быть набор атрибутов, например «открыться в новом окне» или «не следить за мной» и так далее. Всё это превратится в поля объекта:

{
    /*...*/
    a: {
        href: '#'
        target: '_blank',
        textContent: 'Ссылка'
    }
    /*...*/
}


// Дерево — это структура. Такое название структуре дано не зря, она действительно напоминает дерево, только перевёрнутое: корень вверху, от корня вниз идут ветки и листья. Каждая часть дерева называется элементом, а в DOM-дереве элемент называется узлом. То есть узел — это абсолютно любой элемент дерева.

// Узлы бывают родителями — когда у них есть дочерние узлы. И узлы бывают детьми — это узлы, у которых есть родитель.

// Продолжая аналогию: у дерева и корень, и ветки, и листья — это узлы. Для тех веток, которые растут прямо из ствола, ствол — это родитель, с другой стороны для ствола ветка — это ребёнок. И такая иерархическая структура идёт от корня до листьев.

// Почти все узлы могут быть одновременно и родителями и детьми. Почти, потому что есть такие узлы, как корень и листья. Корень — это тот элемент, с которого начинается дерево. То есть, выше корня ничего нет, и у корня нет родителя. Соответственно, каждый элемент, за исключением корня, имеет одного родителя. А лист — это узел, у которого нет детей. Соответственно, каждый узел, кроме листа, имеет любое количество детей.

// Корень — это узел, у которого есть только потомки, лист — это узел, у которого есть только родитель.

// Важные моменты
// Корень может быть только один.
// Родитель может быть только один.
// У DOM-дерева корень — это document. Узел html не может являться корнем, потому что DOM-дерево содержит, кроме тегов, и отступы, и табуляции, и комментарии и так далее. И на одном уровне с html могут оказаться ещё узлы, а корень может быть только один, поэтому корень — это document. Для примера возьмём такую разметку:

// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//     </head>
//     <body>
//     </body>
// </html>
// У каждого узла, представленного объектом, есть свойство parentElement, которое содержит информацию о родителе элемента.

// console.log(document.parentElement); // null
// Потому что у корня не может быть родителей. В свойстве children записаны дочерние элементы узла:

// console.log(document.children); // documentElement — в DOM дочерний элемент document называется не html, а именно documentElement
// // Остальные DOM-узлы называются так же, как и теги в HTML
// Свойство children можно воспринимать как массивоподобную коллекцию детей, а значит мы можем написать код, который будет перебирать всех детей и выводить в консоль структуру.

// Чтобы узнать имя текущего элемента, нужно обратиться к свойству tagName или nodeName. По соглашению, для HTML-документов имя тега всегда возвращается в верхнем регистре, поэтому важно не забывать приводить к общему написанию с помощью метода строки toLowerCase.

// Выведем структуру узла html, включая все дочерние элементы, на примере такой страницы:

// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//     </head>
//     <body>
//         <h1>Document Object Model</h1>
//     </body>
// </html>
// Скрипт для вывода структуры узла html будет иметь следующий вид:

const html = document.documentElement;
for (let i = 0; i < html.children.length; i++) {
    const child = html.children[i];
    console.log(child.tagName.toLowerCase());
    for (let j = 0; j < child.children.length; j++) {
        const innerChild = child.children[j];
        console.log('|---' + innerChild.tagName.toLowerCase());
    }
}
// Скрипт в цикле перебирает все дочерние элементы HTML-узла — documentElement.children. У каждого ребёнка в свою очередь перебирает его дочерние элементы и выводит имена тегов, приведённые к нижнему регистру.

// Результат будет иметь следующий вид:

// head
//   |---meta
// body
//   |---h1