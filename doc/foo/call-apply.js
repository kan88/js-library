// первый способ вызова функция()

// второй способ вызвать функции чтобы изменить контекст
// this определяется в момент вызова
// второй способо функция.apply(this, [Array- будут переданы функции])

// третий способ колл такой же как и аплай кроме параметров 
// функция.call(контекст, аргумент, аргумент)

// спред оператор ... раскладывает массив


const numbers = [1,2,3,4,5,6,]

Math.max(numbers) выдаст null


Math.max(...numbers) выдаст 6