'use strict';

const faker = require('faker');
const categorias = [
  'celulares',
  'Gaming',
  'Tv y Video',
  'Audio',
  'Lavado',
  'Calefaccion y Aires',
  'Accesorios de vehiculos',
  'Computacion',
  'Heladeras',
  'Pequeños electros'];
  
  const imagenes =[
      'img-categoria-celu.jpg',
      'img-categoria-gaming.jpg',
      'img-categoria-TV.jpg',
      'img-categoria-audio.jpg',
      'img-categoria-lavado.jpg',
      'img-categoria-calefaccion.jpg',
      'img-categoria-acces.car.jpg',
      'img-categoria-computacion.jpg',
      'img-categoria-heladeras.jpg',
      'img-categoria-peq.electros.jpg'
     
  ]

const categories = categorias.map((categoria, i) => {
  var category = {
    name : categoria,
    image : imagenes[i],
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
