'use strict';

const imagenes = ['samsung-s20-1.png','img-phone-02.png','smart-tv-50-uhd-4k-philips-50pud6654-77-removebg-preview.png',
'169017-800-auto-removebg-preview.png','D_NQ_NP_894561-MLA44774447406_022021-O-removebg-preview.png','img-product1632739496199.png'];

const images = [];

for (let i = 0; i < 360; i++) {
  for (let index = 0; index < 3; index++) {
    var image = {
      file : imagenes[Math.floor(Math.random() * (5 - 0)) + 0],
      productId : i + 1,
      createdAt : new Date,
      updatedAt : new Date
    }
    images.push(image)
    
  }
  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Images',images, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
