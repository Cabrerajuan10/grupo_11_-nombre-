'use strict';

const faker = require('faker');
const categorias = [
'nuevo',
'oferta',
'Tv, Audio y Video',
'Celulares, Notebooks y Tecnologia',
'Electrodomesticos y Aires',
'Hogar, Muebles y Jardin',
'Salud, Belleza y Fitness',
'Bebes y Niños',
'Herramientas y Accesorios'];

const categories = categorias.map(categoria => {
  var category = {
    name : categoria,
    createdAt : new Date,
    updatedAt : null,
  }
  return category
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Categories',categories, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
