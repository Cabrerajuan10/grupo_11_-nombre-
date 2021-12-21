'use strict'


let products = [
  {
     "id": 1,
     "images": [
     "notebook-exo-141-celeron-n4020-500gb-4gb-m-48-plus-removebg-preview.png"]
  },
  {
     "id": 2,
     "images": ["smart-tv-50-uhd-4k-philips-50pud6654-77-removebg-preview.png"]
  },
  {
     "id": 3,
     "images": ["ba5a66fe2d29273ed1e7244f3e60-removebg-preview.png"]
  },
  {
     "id": 4,
     "images": ["tablet-samsungGalaxy-1.png"]
  },
  {
     "id": 5,
     "images": ["Impresora-Multifuncion-Hp-Deskjet-Ia-3775-1-35353-removebg-preview.png"]
  },
  {
     "id": 6,
     "images": ["mnt390-5_1_fkwfurkcbs9aamde-removebg-preview.png"]
  },
  {
     "id": 7,
     "images": ["8718863021613_03-a-removebg-preview.png"]
  },
  {
     "id": 8,
     "images": ["samsung-s20-1.png"]
  },
  {
   "id": 9,
   "images": ["aire-philco-1.png"]
  },
  {
   "id": 10,
   "images": ["Patrick-HeladeraCiclica-1.png"]
  },
  {
   "id": 11,
   "images": ["lavarropas samsung- 1.png"]
  },
  {
   "id": 12,
   "images": ["cocina whirlpool- 1.png"]
  },
  {
   "id": 13,
   "images": ["microondas atma- 1.png"]
  },
  {
   "id": 14,
   "images": ["pava electrica philips - 1.png"]
  },
  {
   "id": 15,
   "images": ["xbox-series-x-1.png"]
  },
  {
   "id": 16,
   "images": ["Samsung-Galaxy-A01 -1.png"]
  }
]


let images = products.map(product => {
  let image = {
    productId : product.id,
    file : product.images,
    createdAt : new Date
  }

  return image
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Images', images, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};