
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
  {
    id: 1,
    name: 'Living Room 1',
    price: 200,
    quantity: 0,
    image: "IMAGE porducts/livingroom/deco1.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    
    }
  },
  {
    id: 2,
    name: 'Living Room 2',
    price: 100,
    quantity: 0,
    image: "IMAGE porducts/livingroom/deco2.png",
    inCart: 0,
    nature: {
      material: ['acrylic'],
      room: 'livingR'
    }
  },
  {
    id: 3,
    name: 'Living Room 3',
    price: 169,
    quantity: 20,
    image: "IMAGE porducts/livingroom/deco3.png",
    inCart: 0,
    nature: {
      material: ['decorative'],
      room: 'livingR'
    }
  },
  {
    id: 4,
    name: 'Living Room 4',
    price: 70,
    quantity: 0,
    image: "IMAGE porducts/livingroom/deco4.png",
    inCart: 0,
    nature: {
      material: ['decorative'],
      room: 'livingR'
    }
  },
  {
    id: 5,
    name: 'Living Room 5',
    price: 200,
    quantity: 0,
    image: "IMAGE porducts/livingroom/deco5.png",
    inCart: 0,
    nature: {
      material: ['decorative'],
      room: 'livingR'
    }
  },
  {
    id: 6,
    name: 'Living Room 6',
    price: 200,
    quantity: 0,
    image: "IMAGE porducts/livingroom/deco6.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    }

  },
  {
    id: 7,
    name: 'Living Room 7',
    price: 183,
    quantity: 0,
    image: "IMAGE porducts/livingroom/deco7.png",
    inCart: 0,
    nature: {
      material: ['wooden'],
      room: 'livingR'
    }
  },
  {
    id: 8,
    name: 'Living Room 8',
    price: 300,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingled1.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'livingR'
    }
  },
  {
    id: 9,
    name: 'Living Room 9',
    price: 210,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingled2.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'livingR'
    }
  },
  {
    id: 10,
    name: 'Living Room 10',
    price: 129,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingled3.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'livingR'
    }
  },
  {
    id: 11,
    name: 'Living Room 11',
    price: 139,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingmetal1.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    }
  },
  {
    id: 12,
    name: 'Living Room 12',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingmetal4.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    }
  },
  {
    id: 13,
    name: 'Living Room 13',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingmetal5.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    }
  },
  {
    id: 14,
    name: 'Living Room 14',
    price: 423,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingmetal6.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    }
  },
  {
    id: 15,
    name: 'Living Room 15',
    price: 339,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingWooden1.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'livingR'
    }
  },
  {
    id: 16,
    name: 'Living Room 16',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingWooden2.png",
    inCart: 0,
    nature: {
      material: ['wooden'],
      room: 'livingR'
    }
  },
  {
    id: 17,
    name: 'Living Room 17',
    price: 259,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingWooden3.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'livingR'
    }
  },
  {
    id: 18,
    name: 'Living Room 18',
    price: 239,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingWooden4.png",
    inCart: 0,
    nature: {
      material: ['decorative'],
      room: 'livingR'
    }
  },
  {
    id: 19,
    name: 'Living Room 19',
    price: 432,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingWooden5.png",
    inCart: 0,
    nature: {
      material: ['wooden'],
      room: 'livingR'
    }
  },
  {
    id: 20,
    name: 'Living Room 20',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/livingroom/livingWooden6.png",
    inCart: 0,
    nature: {
      material: ['wooden'],
      room: 'livingR'
    }
  },
  {
    id: 21,
    name: 'Bed Room 1',
    price: 329,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled1.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'bedR'
    }
  },
  {
    id: 22,
    name: 'Bed Room 2',
    price: 391,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled2.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'bedR'
    }
  },
  {
    id: 23,
    name: 'Bed Room 3',
    price: 349,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled3.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'bedR'
    }
  },
  {
    id: 24,
    name: 'Bed Room 4',
    price: 109,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled4.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'bedR'
    }
  },
  {
    id: 25,
    name: 'Bed Room 5',
    price: 559,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled5.png",
    inCart: 0,
    nature: {
      material: ['bluetooth'],
      room: 'bedR'
    }
  },
  {
    id: 26,
    name: 'Bed Room 6',
    price: 329,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled6.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'bedR'
    }
  },
  {
    id: 27,
    name: 'Bed Room 7',
    price: 669,
    quantity: 0,
    image: "IMAGE porducts/bedroom/bedled7.png",
    inCart: 0,
    nature: {
      material: ['led'],
      room: 'bedR'
    }
  },
  {
    id: 28,
    name: 'Bed Room 8',
    price: 659,
    quantity: 0,
    image: "IMAGE porducts/bedroom/deco1.png",
    inCart: 0,
    nature: {
      material: ['wooden', 'decorative'],
      room: 'bedR'
    }
  },
  {
    id: 29,
    name: 'Bed Room 9',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/bedroom/deco2.png",
    inCart: 0,
    nature: {
      material: ['arcylic'],
      room: 'bedR'
    }
  },
  {
    id: 30,
    name: 'Bed Room 10',
    price: 259,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal1.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'bedR'
    }
  },
  {
    id: 31,
    name: 'Bed Room 11',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal2.png",
    inCart: 0,
    nature: {
      material: ['metal', 'decorative'],
      room: 'bedR'
    }
  },
  {
    id: 32,
    name: 'Bed Room 12',
    price: 659,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal3.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'bedR'
    }
  },
  {
    id: 33,
    name: 'Bed Room 13',
    price: 659,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal4.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'bedR'
    }
  },
  {
    id: 34,
    name: 'Bed Room 14',
    price: 159,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal5.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'bedR'
    }
  },
  {
    id: 35,
    name: 'Bed Room 15',
    price: 559,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal7.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'bedR'
    }
  },
  {
    id: 36,
    name: 'Bed Room 15',
    price: 659,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal7.png",
    inCart: 0,
    nature: {
      material: ['metal'],
      room: 'bedR'
    }
  },
  {
    id: 37,
    name: 'Bed Room 16',
    price: 559,
    quantity: 0,
    image: "IMAGE porducts/bedroom/metal8.png",
    inCart: 0,
    nature: {
      material: ['decorative'],
      room: 'bedR'
    }
  },
  {
    id: 38,
    name: 'Bed Room 17',
    price: 659,
    quantity: 0,
    image: "IMAGE porducts/bedroom/wooden2.png",
    inCart: 0,
    nature: {
      material: ['wooden'],
      room: 'bedR'
    }
  },
  {
    id: 39,
    name: 'Bed Room 39',
    price: 359,
    quantity: 0,
    image: "IMAGE porducts/bedroom/wooden3.png",
    inCart: 0,
    nature: {
      material: ['wooden'],
      room: 'bedR'
    }
  },
  {
    id: 40,
    name: 'Bed Room 40',
    price: 329,
    quantity: 0,
    image: "IMAGE porducts/bedroom/wooden4.png",
    nature: {
      material: ['wooden'],
      room: 'bedR'
    }
  },
  {
    id: 41,
    name: 'Bathroom 1',
    price: 329,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathbluetooth3.png",
    nature: {
      material: ['bluetooth', 'decorative'],
      room: 'bathR'
    }
  },
  {
    id: 42,
    name: 'Bathroom 2',
    price: 559,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathbluetooth4.png",
    nature: {
      material: ['led'],
      room: 'bathR'
    }
  },
  {
    id: 43,
    name: 'Bathroom 3',
    price: 219,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathdeco1.png",
    nature: {
      material: ['metal'],
      room: 'bathR'
    }
  },
  {
    id: 44,
    name: 'Bathroom 4',
    price: 329,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathdeco2.png",
    nature: {
      material: ['metal'],
      room: 'bathR'
    }
  },
  {
    id: 45,
    name: 'Bathroom 5',
    price: 1129,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathled1.png",
    nature: {
      material: ['bluetooth', 'led'],
      room: 'bathR'
    }
  },
  {
    id: 46,
    name: 'Bathroom 6',
    price: 629,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathled2.jpg",
    nature: {
      material: ['bluetooth', 'led'],
      room: 'bathR'
    }
  },
  {
    id: 47,
    name: 'Bathroom 7',
    price: 629,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathled3.jpg",
    nature: {
      material: ['bluetooth', 'led'],
      room: 'bathR'
    }
  },
  {
    id: 48,
    name: 'Bathroom 8',
    price: 629,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathmetal.png",
    nature: {
      material: ['metal', 'arcylic'],
      room: 'bathR'
    }
  },
  {
    id: 49,
    name: 'Bathroom 9',
    price: 129,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathmetal2.png",
    nature: {
      material: ['metal'],
      room: 'bathR'
    }
  },
  {
    id: 50,
    name: 'Bathroom 10',
    price: 229,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/bathmetal3.png",
    nature: {
      material: ['metal'],
      room: 'bathR'
    }
  },
  {
    id: 51,
    name: 'Bathroom 11',
    price: 229,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/led4.png",
    nature: {
      material: ['led'],
      room: 'bathR'
    }
  },

  {
    id: 52,
    name: 'Bathroom 12',
    price: 329,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/led5.png",
    nature: {
      material: ['decorative'],
      room: 'bathR'
    }
  },
  {
    id: 53,
    name: 'Bathroom 13',
    price: 229,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/led6.png",
    nature: {
      material: ['decorative'],
      room: 'bathR'
    }
  },

  {
    id: 54,
    name: 'Bathroom 14',
    price: 229,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/wooden1.png",
    nature: {
      material: ['wooden'],
      room: 'bathR'
    }
  },
  {
    id: 55,
    name: 'Bathroom 15',
    price: 239,
    quantity: 0,
    image: "IMAGE porducts/ Bathroom mirrors/wooden2.png",
    nature: {
      material: ['wooden'],
      room: 'bathR'
    }
  },
  {
    id: 56,
    name: 'Drawing 1',
    price: 239,
    quantity: 0,
    image: "IMAGE porducts/dressing/Bluetooth1.png",
    nature: {
      material: ['bluetooth'],
      room: 'drawingR'
    }
  },
  {
    id: 57,
    name: 'Drawing 2',
    price: 349,
    quantity: 0,
    image: "IMAGE porducts/dressing/bluetooth2.png",
    nature: {
      material: ['bluetooth'],
      room: 'drawingR'
    }
  },
  {
    id: 58,
    name: 'Drawing 3',
    price: 539,
    quantity: 0,
    image: "IMAGE porducts/dressing/bluetooth3.png",
    nature: {
      material: ['bluetooth'],
      room: 'drawingR'
    }
  },
  {
    id: 59,
    name: 'Drawing 4',
    price: 639,
    quantity: 0,
    image: "IMAGE porducts/dressing/bluetooth5.png",
    nature: {
      material: ['bluetooth', 'decorative'],
      room: 'drawingR'
    }
  },
  {
    id: 56,
    name: 'Drawing 5',
    price: 339,
    quantity: 0,
    image: "IMAGE porducts/dressing/led1.png",
    nature: {
      material: ['led'],
      room: 'drawingR'
    }
  },






];
let productFilter = listProducts;
showProduct(productFilter);

filter.addEventListener('submit', function (event) {
  event.preventDefault();
  let valueFilter = event.target.elements;
  productFilter = listProducts.filter(item => {
    // check category
    if (valueFilter.material.value != '') {
      if (item.nature.material != valueFilter.material.value) {
        return false;
      }
    }
    // check color
    if (valueFilter.room.value != '') {
      if (!item.nature.room.includes(valueFilter.room.value)) {
        return false;
      }
    }
    // check name
    if (valueFilter.name.value != '') {
      if (!item.name.includes(valueFilter.name.value)) {
        return false;
      }
    }
    // check min price
    if (valueFilter.minPrice.value != '') {
      if (item.price < valueFilter.minPrice.value) {
        return false;
      }
    }
    //  check max price
    if (valueFilter.maxPrice.value != '') {
      if (item.price > valueFilter.maxPrice.value) {
        return false;
      }
    }


    return true;
  })
  showProduct(productFilter);
})
function showProduct(productFilter) {
  count.innerText = productFilter.length;
  list.innerHTML = '';
  productFilter.forEach(item => {
    let newItem = document.createElement('div');
    newItem.classList.add('item');

    // create image
    let newImage = new Image();
    newImage.src = item.image;
    newItem.appendChild(newImage);
    // create name product
    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.name;
    newItem.appendChild(newTitle);
    // create price
    let newPrice = document.createElement('div');
    newPrice.classList.add('price');
    newPrice.innerText = item.price.toLocaleString() + ' $';
    newItem.appendChild(newPrice);

    let newAdd = document.createElement('div');
    newAdd.classList.add('add');
    newAdd.innerText = 'Add to cart';
    newItem.appendChild(newAdd);

    list.appendChild(newItem);
  });
}
