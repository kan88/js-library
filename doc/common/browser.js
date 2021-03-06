// Поиск элемента по тегу
var list = document.querySelector('ul');

// Поиск последнего элемента из списка
var lastProduct = document.querySelector('li:last-child');

// Поиск элемента по классу
var price = document.querySelector('.price');

// Поиск третьего элемента из списка товаров
var thirdProduct = document.querySelector('.product:nth-child(3)');

// Когда ищем элемент по классу, используем точку
var product = document.querySelector('.product');

// Но когда добавляем класс, точки нет!
product.classList.add('product--sale');

// Из части «Условия» вы знаете, что булевы значения сами могут выступать в качестве условий. Поэтому наша проверка могла бы выглядеть примерно так:

var value = true;

if (value) {
  // Код выполнится
}
// Только в нашем случае проверка должна сработать, если значение свойства isAvailable равно false. Поэтому нужна проверка с отрицанием:

var value = false;

if (!value) {
  // Код выполнится
}

// Создание DOM-элемента

// Для начала нужно создать новый элемент списка, li. Создавать элементы можно разными способами, мы будем использовать метод createElement() объекта document. Метод принимает на вход строку с именем тега и возвращает созданный DOM-элемент. Этот элемент можно записать в переменную для дальнейших манипуляций:

var card = document.createElement('li');
// Обратите внимание, что createElement — метод именно объекта document. То есть с его помощью мы создаём какой-то элемент для этого документа, пока не указывая, где он будет находиться в DOM.

// Добавление класса

// С этим шагом вы уже знакомы. Работаем с classList созданного элемента:

var card = document.createElement('li');
card.classList.add('card');
// Добавление в DOM-дерево

// Вновь созданный элемент по умолчанию не находится в DOM-дереве и не отображается на странице. Мы просто храним его где-то в переменной. Чтобы новый элемент появился на странице, его нужно добавить в DOM. Для этого найдём в текущем DOM-дереве элемент (родитель) и вставим в него наш элемент.

// Мы будем использовать метод appendChild() родителя. Этот метод принимает на вход элемент и вставляет его в конец родительского элемента. То есть, если в списке уже есть три элемента, как в нашем случае, добавленный с помощью appendChild элемент станет четвёртым в списке.

var list = document.querySelector('.cards');
var card = document.createElement('li');
card.classList.add('card');

// После вызова этого метода новый элемент отрисуется на странице
list.appendChild(card);

// Последовательность добавления элемента в DOM может быть другой: можно создать элемент с помощью createElement и сразу вставить его в родительский элемент, а уже затем добавлять классы. Но это не лучший путь — каждое изменение в DOM вызывает перерисовку страницы, а это дорогая операция, она занимает много времени.

var cardList = document.querySelector('.products');
console.log(cardList.children);

var listItem = document.createElement('li')
listItem.classList.add('product')

cardList.appendChild(listItem)

console.log(cardList.children)


// У каждого DOM-элемента есть свойство textContent. Оно содержит текстовое содержимое элемента. В textContent не попадает разметка, только текст.

// // HTML
// <p>Я — <em>текстовый элемент</em>.</p>

// JS
var p = document.querySelector('p');
console.log(p.textContent);
// Выведет: Я — текстовый элемент.
// Это свойство объекта, которое можно не только прочитать, но и записать или перезаписать. Поэтому, если мы хотим задать элементу текстовое содержимое, достаточно записать в свойство необходимое значение.

p.textContent = 'Теперь у меня новое содержимое.';
console.log(p.textContent);
// Выведет: Теперь у меня новое содержимое.

// В HTML содержание тега изменится
<p>Теперь у меня новое содержимое.</p>

//Function createElement

var makeElement = (tagName, className, text) => {
    var element = document.createElement(tagName)
    element.classList.add(className)
    if (text) {
      element.textContent = (text)
      }
      return element
    }
// Чтобы картинка отобразилась на странице, нужно задать ей адрес файла с изображением, то есть значение атрибута src. Значением этого атрибута можно управлять с помощью одноимённого свойства DOM-элемента:

var picture = document.createElement('img');
picture.src = 'images/picture.jpg'
picture.alt = 'Непотопляемая селфи-палка';

//добавление карточки из массива

for (var i = 0; i < array.length; i++) {
    var item = createCard(array[i]);
    list.appendChild(item);
  }

  let elements = document.querySelectorAll('p');

  console.log(elements[0]); // Выведет первый элемент коллекции
  console.log(elements[1]); // Выведет второй элемент коллекции

  tooltipButtons[0].onclick = function () {
    tooltip.classList.add('opened');
  };
  
  tooltipButtons[1].onclick = function () {
    tooltip.classList.add('opened');
  };

  //   Атрибуты, начинающиеся с data-, обычно используют, чтобы хранить вспомогательную информацию. Подробнее о них вы можете почитать здесь.

  // Как получить значение такого атрибута в JavaScript? Для этого используют свойство dataset, после которого указывают имя атрибута без префикса data-:

  // элемент.dataset.имяАтрибутаБезПрефикса

  // <p>Конструкторы лаборатории <button class="tooltip-button" type="button" data-tooltip-text="так себе лаборатория">DogDrones.inc</button> заверили, что их дроны не могут быть переносчиками опасных вирусов, так как это не заложено в их программу. <button class="tooltip-button" type="button" data-tooltip-text="но это не точно, - прим. юриста">Возможно</button>, истинная причина в том, что дроны лаборатории не способны переносить вообще ничего.</p>
console.log(tooltipButtons[0].dataset.tooltipText)

let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text')

tooltipButtons[0].onclick = function () {
 tooltipText.textContent = tooltipButtons[0].dataset.tooltipText
  tooltip.classList.add('opened');
};

tooltipButtons[1].onclick = function () {
  tooltipText.textContent = tooltipButtons[1].dataset.tooltipText
  tooltip.classList.add('opened');
};

closeButton.onclick = function () {
  tooltip.classList.remove('opened');
};
