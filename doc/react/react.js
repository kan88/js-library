В предыдущем примере для вывода приветствия мы написали код на JSX:

<h1>Привет, Мир!!! Меня зовут <b>{name}</b></h1>
Он выглядит как обычный HTML: легко и понятно. На обычном HTML это выглядело бы так:

<h1>Привет, Мир!!! Меня зовут <b>Вася</b></h1>

Следующий пример выводит цену покупки на основе цены товара и его количества, переданных компоненту через props. Также в зависимости от цены продукта подставляются разные title-атрибуты:

function Price ({productPrice, quantity}) {
  return (
    <p title = {productPrice < 1000 ? "лучшая цена" : "спасибо за покупку"} >
      Цена: {productPrice * quantity}
    </p>
  );
}
Если в компонент Price через props придут данные {productPrice: 2000, quantity: 2}, то он вернёт разметку:

<p title="спасибо за покупку">Цена: 4000</p>
А если, например, передать: {productPrice: 500, quantity: 10}, то  title изменится, и на выходе получится:

<p title="лучшая цена">Цена: 5000</p>

Как видно из примера, фигурные скобки можно использовать не только для описания содержимого тегов, но и для атрибутов.

Используя JSX, мы можем о нём думать как о привычном HTML, который можно писать прямо внутри JavaScript. Но важно помнить, что JSX только похож на HTML. На самом деле, он в конечном счёте будет преобразован в JavaScript-объекты. Этим обусловлено несколько особенностей JSX:

В отличие от HTML, в JSX все теги всегда должны быть закрыты.
В HTML допустимо и даже приветствуется не закрывать одиночные теги. Например, можно просто написать тег <img> и не закрывать его. Но в JSX нужно всегда закрывать все теги, в том числе и <img>: <img />. Теги без дочерних элементов принято сразу закрывать, например, вместо <div></div> пишут просто <div />. Конечно, в случае с <div> это не имеет большого смысла, но в дальнейшем мы научимся вставлять в JSX наши собственные компоненты, и там этот синтаксис окажется полезным.

Таким образом, следующий код абсолютно валиден для HTML:  <p> Порода красоты лицу не придаёт: <br> В селе и в городе цветок равно цветёт.</p>. Но если вставить его в компонент, то будет выведена ошибка. Всё дело в теге <br>, который не был закрыт. Если исправить эту ошибку, то компонент будет корректно отображён на странице.

JSX всегда должен иметь один родительский элемент.
JSX всегда представляет собой дерево. К примеру, код <p>Первый абзац</p><p>Второй абзац</p> в JSX окажется некорректным, потому что у тегов <p> нет общего родителя. Код из примера не отработает корректно, будет выведена ошибка:


function StaticText () {
  return (
    <p>Первый абзац</p>
    <p>Второй абзац</p>
  );
}
Это неудивительно. Даже если бы JSX умел обработать эту конструкцию, то, как упоминалось ранее, теги в итоге заменяются на вложенные друг в друга объекты React.element. При отсутствии общего родителя теги заменились бы на два не связанных между собой объекта, что вызвало бы ошибку в JavaScript.

Чтобы исправить ошибку, нужно обернуть теги <p> в общий родитель. Можно использовать любой тег, например: <div><p>Первый абзац</p><p>Второй абзац</p></div>. Такая разметка будет корректна с точки зрения JSX и не вызовет ошибок при рендеринге.

Однако порой лишний общий родитель в разметке бывает не нужен с точки зрения семантики. Да и в целом лишние узлы не способствуют улучшению производительности. В таких случаях можно использовать специальный элемент — React.Fragment. Если указать его в качестве родительского элемента, то JSX из предыдущего примера станет корректным, но при этом DOM-узла под React.Fragment создано не будет. То есть на страницу будут добавлены только дочерние элементы без React.Fragment. Переписав StaticText с использованием React.Fragment, мы получим корректный работающий код:


function StaticText () {
  return (
    <React.Fragment>
      <p>Первый абзац</p>
      <p>Второй абзац</p>
    </ React.Fragment>
  );
};

Нельзя использовать атрибут class.
В HTML для различных элементов можно указывать классы стилизации в атрибуте class. Например, <img class="image image_big">. Но в JavaScript class — это ключевое слово, а так как JSX трансформируется в JavaScript, то и в JSX нельзя использовать атрибуты с таким именем в разметке. Вместо class в JSX нужно использовать атрибут className и уже в нём указывать CSS-классы элемента. К примеру, вместо <img class="image image_big"> в JSX нужно писать <img className="image image_big" />.

Нельзя использовать атрибут for.
for — тоже ключевое слово в языке JavaScript. Поэтому вместо атрибута for, через который обычно связывают HTML-элемент label с элементом ввода, нужно использовать атрибут htmlFor. Всё точно так же, как и в случае с class, просто названия другие.

React должен находиться в области видимости кода с JSX (справедливо только для старых версий React и инструментов сборки).
JSX будет преобразован сборщиком проекта в вызов функции, а если точнее, в вызов функции React.createElement. Поэтому React должен находиться в области видимости кода с JSX, иначе неоткуда будет получить React.createElement. Соответственно, в файлы с JSX нужно импортировать React даже в тех случаях, когда он не используется непосредственно в коде.

Например, в компоненте Hello нет прямого вызова React. Поэтому может показаться, что import React from "react" можно убрать:

import React from "react";

function Hello() {
  return <div>Привет, Мир</div>;
}
Но это вызовет ошибку, так как в процессе сборки проекта JSX будет преобразован в вызов React.createElement. Код компонента примет вид:

import React from "react";

function Hello() {
  return React.createElement("div", {}, "Привет, Мир");
}
В этом коде использование React из неявного становится явным. Очевидно, что без объекта React в области видимости компонента вызов React.createElement приведёт к ошибке, потому что React будет undefined.

Современная версия React и инструменты сборки автоматически добавляют нужные для JSX методы в код (например, так настроен проект в CodeSandbox). В таких случаях писать import React from "react"; не нужно. Однако в примерах и демонстрациях мы всё равно будем это делать, чтобы вам было легче копировать примеры в локальные проекты.

Значения переменных true, false, null и undefined игнорируются при рендеринге. То есть на их месте ничего не будет выведено.
Если в JavaScript выполнить код  console.log(`<div>${undefined}</div>`);, то в консоль будет выведено <div>undefined</div>. Так происходит из-за того, что JavaScript, приводя undefined к строке, превращает его в строку вида: undefined. JSX подобные значения просто игнорирует и не выводит вообще. В следующем примере ничего не будет выведено на экран:

import React from "react";

function Empty() {
  return <div>{undefined}</div>;
}

export default Empty;
Стили для атрибута style можно указывать в виде JavaScript-объекта.
Это часто бывает удобно, потому что позволяет использовать JavaScript-переменные в качестве значений стилей. При этом названия свойств CSS, которые содержат «-», должны быть заменены на camelCase.

В следующем примере цвет фона для элемента с именем пользователя меняется на основе букв в его имени.

import React from "react";

function HelloWorld({ 
  name // Имя пользователя
}) {
  // Будем вычислять цвет, преобразовывая первые три символа имени 
  // в значения rgb цветового пространства.
  const getColorFromName = (userName) => {
    // Если имя меньше трёх букв, 
    // то вычислить цвет не получится — возвращаем белый.
    if (userName && userName.length > 2) { 
      let result = "";
      for (let i = 0; i < 3; ++i) {
        // Для каждого из первых трёх символов выполняем преобразование в 16-ричную систему.
        // Для этого берём код символа, 
        // преобразуем его в остаток от деления на 256 
        // (чтобы гарантировать, что результат не превысит 255 — максимальное значение для цвета )
        // и переводим число в 16-ричную систему исчисления.
        result += (userName[i].charCodeAt(0) % 256).toString(16);
      }

      return result.toUpperCase();
    }

    return "FFFFFF";
  };
  return (
    <h1>
      Привет, Мир!!! Меня зовут{" "}
      <b style={{ backgroundColor: `#${getColorFromName(name)}` }}>{name}</b>
    </h1>
  );
}

export default HelloWorld;
Компоненты и JSX
Внутри JSX можно использовать не только стандартные теги, но и собственные компоненты. В этом случае название компонента становится именем тега, а props передаются через атрибуты.

В компоненте HelloWorld вынесем имя пользователя в отдельный компонент. Для этого создадим отдельный файл, в котором будет размещён код нового компонента, и назовём его user-name.

В примерах для краткости мы будем размещать несколько компонентов в одном файле. Но в реальных проектах лучше хранить каждый компонент в отдельном файле

Далее создадим в файле компонент UserName. Разметку для имени можно позаимствовать прямо из компонента HelloWorld -<b>{`${firstName} ${secondName}`}</b>, а динамические значения firstName и secondName поместим в props. В результате получится:

// user-name
import React from "react";

function UserName ({firstName, secondName}) {
  return (<b>{`${firstName} ${secondName}`}</b>);
}

export default UserName;
Теперь, когда компонент UserName готов, изменим HelloWorld таким образом, чтобы вместо своей разметки он использовал UserName для вывода имени. Для этого импортируем UserName в файл с компонентом HelloWorld и заменим в нём теги, описывающие имя пользователя, на компонент UserName.

Далее через атрибуты UserName нужно прокинуть props с именем пользователя из компонента HelloWorld в UserName. В результате HelloWorld примет вид.

// hello-world
import React from "react";
import UserName from "./user-name";

function HelloWorld({ firstName, secondName }) {
  return (
    <p>
      <span>Привет, Мир!!! Меня зовут: </span>
      <UserName firstName={firstName} secondName={secondName} />
    </p>
  );
}

export default HelloWorld;
Теперь компонент HelloWorld выводит только само приветствие, а вывод имени делегируется компоненту UserName, результаты работы которого будут подставлены в нужную часть разметки HelloWorld.

В результате всех манипуляций выводимый на экран результат не изменился, но код стал более гибким. Раньше разметка и логика отображения имени пользователя являлись частью компонента HelloWorld и не могли быть переиспользованы в других частях приложения в отрыве от приветствия. Но сейчас, обогатив проект компонентом UserName, мы получили возможность одинаково легко выводить имя пользователя в любой части страницы: как в приветствии, так и, например, в личном кабинете.

Сам компонент HelloWorld также стал легче и понятнее. Теперь он содержит только логику для вывода приветствия, для которой и был изначально создан. А вывод имени инкапсулирован в UserName и не мешает воспринимать код компонента для приветствия.

Подобный подход деления крупных компонентов на более мелкие применяется в React повсеместно. Разметка крупных компонентов состоит из маленьких, а маленьких — из ещё более простых. В результате страница на React обычно представляет собой набор вложенных друг в друга компонентов. А приём, когда из набора маленьких компонентов собирают более сложные элементы, называют композицией компонентов.

Важно отметить, что использование заглавной буквы в имени компонента для JSX является обязательным. Именно благодаря заглавной букве JSX понимает, что перед ним не тег с кастомным названием, а пользовательский компонент.

Если в предыдущем примере написать UserName с маленькой буквы, то имя пользователя перестанет выводиться на экран. Так произойдёт из-за того, что JSX интерпретирует <userName .../> не как команду вызова компонента userName, а как обычный HTML-тег с именем username. Это произойдёт, даже несмотря на наличие константы userName в коде. В свою очередь HTML-тег <username> от обычного <div> отличается по большей части только названием и не умеет обрабатывать атрибуты firstName и secondName, выводя их на экран.

В предыдущих примерах в CodeSandbox вы, наверное, уже успели заметить код ReactDOM.render(HelloWorld({ name: "Вася" }), rootElement);. Там мы вызываем компонент HelloWorld как функцию (потому что он и есть функция), передавая в параметрах нужные props.

Такой код был написан только потому, что мы ещё не умели использовать компоненты в JSX. Теперь этот код можно заменить на ReactDOM.render(<HelloWorld name="Вася" />), rootElement);.

Синтаксис JSX предпочтительнее, чем прямой вызов компонентов как функций.

В дальнейшем мы будем использован синтаксис JSX для добавления компонентов на страницу.

Как и с обычными тегами, в компоненты можно вкладывать дочерние элементы. Например, как в следующем примере:

import React from "react";

function UserName () {
  return (<b>пусто</b>);
}

export function HelloWorld ({firstName, secondName}) {
  return (<p>Привет, Мир!!! Меня зовут <UserName> {`${firstName} ${secondName}`} </UserName></p>);
}
Здесь внутрь UserName передаётся имя и фамилия пользователя как дочерний текстовый элемент. Но если посмотреть на результаты работы в CodeSandbox, то можно заметить, что имя и фамилия нигде не появились, а вместо них выводится «пусто», как и указано в компоненте UserName. Так происходит из-за того, что мы не указали, куда именно в UserName нужно вывести переданные дочерние элементы. Чтобы это указать, React предоставляет специальный props children. Все переданные в компонент дочерние элементы попадают в props children. Поэтому нужно использовать props children внутри компонента, чтобы вывести в нужном месте переданные ему дочерние элементы.

В следующем примере будут выведены дочерние элементы UserName через children.

import React from "react";

function UserName({ children }) {
  return <b>{children}</b>;
}

export function HelloWorld({ firstName, secondName }) {
  return (
    <p>
      Привет, Мир!!! Меня зовут{" "}
      <UserName> {`${firstName} ${secondName}`} </UserName>
    </p>
  );
}
Теперь имя, переданное в качестве дочернего элемента, выводится на страницу. А сам код благодаря children стал больше похож на привычный HTML, в котором контент располагается внутри тегов. JSX начал выглядеть так, словно у нас есть тег UserName и его контентом является строка с именем пользователя. Это улучшило читабельность компонента, стало понятнее, какие props являются как бы настройками компонента и что является его контентом.

Стоит отметить, что children отличается от обычных props в первую очередь синтаксисом. И ничто не мешает переписать предыдущий пример без использования children:

import React from "react";

function UserName({ name }) {
  return <b>{name}</b>;
}

export function HelloWorld({ firstName, secondName }) {
  return (
    <p>
      Привет, Мир!!! Меня зовут{" "}
      <UserName name={`${firstName} ${secondName}`} />
    </p>
  );
}
Здесь мы передаём имя в UserName через обычный props name, при этом программа работает точно так же, как и в примере с children. Таким образом, нет конкретного правила, когда использовать children, а когда — нет. Всё зависит от семантики разрабатываемых компонентов и правил проекта.