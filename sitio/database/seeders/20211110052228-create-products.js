'use strict';


 let products = [
  {
    "name": "Notebook celeron 15'",
    "description": "Notebook Exo 14,1 Celeron N4020 500GB 4GB M-48 PLUS",
    "price": 69.999,
    "priceRegular": 82.000,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": " Smart TV 50 UHD4K Philips",
    "description": "El Smart TV Philips 50 pulgadas 50PUD6654/77 cuenta con una pantalla de visualización LED de 16:9 y resolución Ultra HD 4K 3840 x 2160 píxeles que brinda una gran calidad de imagen y contraste.",
    "categoryId": 1,
    "price": 59.999,
    "priceRegular": 69.999,
    "discount": 15,
    "show": true,
    createdAt: new Date
},
{
    "name": "Monitor Samsung 22",
    "description": "Mediante su entrada PC In podrás conectar tu PC o Notebook. Además, también ofrece la posibilidad de conectarse a través de HDMI. El LED no tiene sistema de audio incorporado",
    "categoryId": 1,
    "price": 25.999,
    "priceRegular": 30000,
    "discount": 10,
    "show": true,
    createdAt: new Date
},
{
    "name": "Tablet Samsung Galaxy S7",
    "description": "Posee sistema operativo Android y procesador Octa-Core, que te permitirán mejorar el rendimiento. Además, gracias a la memoria interna de 128 GB podrás utilizar tus aplicaciones favoritas, manejar tus redes sociales, llevar tus juegos preferidos, guardar tu música y fotos. Incluso, tendrás la posibilidad de expandirla con una tarjeta microSD en hasta 1TB",
    "price": 106.999,
    "priceRegular": 150000,
    "discount": 10,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Impresora Multifunción HP",
    "description": "Con la impresora multifunción HP Deskjet Ink Advantage 3775 podrás imprimir, escanear y copiar de manera inalámbrica. Tiene un diseño compacto, pensado para ahorrar espacio y que quepa en un escritorio, un estante o en el lugar de tu hogar que necesites. Además, cuenta con un modo silencioso que evita ruidos molestas excesivos",
    "categoryId": 1,
    "price": 14.499,
    "priceRegular": 18620,
    "discount": 10,
    "show": true,
    createdAt: new Date
},
{
    "name": "Parlante Bluetooth Noblex",
    "description": "El parlante Noblex MNT390 tiene un diseño compacto y liviano. Llevalo con vos donde vayas gracias a sus medidas: 62,5 cm x 25 cm 26 cm y su peso de 7,47 kg. Además, cuenta con efectos de iluminación Led Flashing Lights y True Wireles Stereo, que permite la conexión simultánea de dos unidades logrando estéreo real y una mayor potencia.",
    "price": 29.999,
    "priceRegular": 30362,
    "discount": 10,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Heladera wirlpool",
    "description": "consectetuer adipiscing elit proin risus",
    "price": 34.999,
    "priceRegular": 40000,
    "discount": 15,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "microondas bgh",
    "description": "vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
    "price": 19.999,
    "priceRegular": 21000,
    "discount": 5,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Equipo de musica - Sony",
    "description": "pede posuere nonummy integer non velit donec",
    "price": 28.999,
    "priceRegular": 350000,
    "discount": 10,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
}
 ]




module.exports = {
  up: async (queryInterface, Sequelize) => {    
     
    await queryInterface.bulkInsert('Products', products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Products', null, {});
     
  }
};