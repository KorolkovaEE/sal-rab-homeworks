// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    
  //  let title; let count; let street; let house; let entrance; let floor; let flat; let a; let b;
  let data = {client:name + ' ' + phone, goods: [], order: {}};

     
   
    data.order= {address:{street:'', house:'', floor:'',flat:''}, sum};
      
    data.order.address = `ул. `+ address.street + `, дом ` + address.house + `, `+ address.entrance +` подъезд, ` + address.floor + ` этаж, кв ` + address.flat;
    let countOfGoods = goods.length;
    
    for (let i = 0; i < countOfGoods; i ++) {
     // console.log(goods[i].title, goods[i].count)
      data.goods.push({title:goods[i].title, count:goods[i].count});
     // console.log(data.goods);
    }

    //data.order.address = address;
    //data.order.sum = sum;

   // data.client = 'Иван';

    let jsonData = JSON.stringify({data});
    //console.log (jsonData);

    return jsonData;
}
