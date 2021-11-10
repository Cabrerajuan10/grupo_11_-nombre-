'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Users',[
       {
        name : 'Mati',
        email : 'mati@communityElectro.com',
        password : bcrypt.hashSync('123123',10),
        avatar : 'avatar-1635310335310.jpg',
        rolId : 2,
        createdAt : new Date,
        updatedAt : new Date
       },
       {
        name : 'Juan',
        email : 'juan@communityElectro.com',
        password : bcrypt.hashSync('123123',10),
        avatar : 'avatar-default.jpg',
        rolId : 2,
        createdAt : new Date,
        updatedAt : new Date
       },
       {
        name : 'Maxi',
        email : 'maxi@communityElectro.com',
        password : bcrypt.hashSync('123123',10),
        avatar : 'avatar-default.jpg',
        rolId : 2,
        createdAt : new Date,
        updatedAt : new Date
       }
     ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
