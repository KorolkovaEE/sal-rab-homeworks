// Задание 4.1. Вывод карточек товаров
function parseProducts(json) {
    
   let data = JSON.parse(json);
   let products = data.products;

   return products;
}
function renderProductsCards(json){
 
   clearProducts();
      products = parseProducts(json);
      let length = products.length ;

      for (let i = 0; i < length; i+=1) {
         addProduct (products[i]) 
};
   
  
}

// Напишите функцию renderProductsCards(json)

// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products

     // Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
