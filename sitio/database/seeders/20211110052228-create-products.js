'use strict';


 let products = [
  {
    "name": "Notebook celeron 15'",
    "description": "Notebook Exo 14,1 Celeron N4020 500GB 4GB M-48 PLUS",
    "price": 69.999,
    "priceRegular": 82.000,
    "discount": 0,
    "categoryId": 8,
    "show": true,
    createdAt: new Date
},
{
    "name": " Smart TV 50 UHD4K Philips",
    "description": "El Smart TV Philips 50 pulgadas 50PUD6654/77 cuenta con una pantalla de visualización LED de 16:9 y resolución Ultra HD 4K 3840 x 2160 píxeles que brinda una gran calidad de imagen y contraste.",
    "categoryId": 3,
    "price": 59.999,
    "priceRegular": 69.999,
    "discount": 15,
    "show": true,
    createdAt: new Date
},
{
    "name": "Monitor Samsung 22",
    "description": "Mediante su entrada PC In podrás conectar tu PC o Notebook. Además, también ofrece la posibilidad de conectarse a través de HDMI. El LED no tiene sistema de audio incorporado",
    "categoryId": 3,
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
    "categoryId": 8,
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
    "categoryId": 4,
    "show": true,
    createdAt: new Date
},
{
    "name": "Heladera wirlpool",
    "description": "consectetuer adipiscing elit proin risus",
    "price": 34.999,
    "priceRegular": 40000,
    "discount": 15,
    "categoryId": 9,
    "show": true,
    createdAt: new Date
},
{
    "name": "microondas bgh",
    "description": "vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
    "price": 19.999,
    "priceRegular": 21000,
    "discount": 5,
    "categoryId": 10,
    "show": true,
    createdAt: new Date
},
{
    "name": "Aire acondicionado Philco 2200F",
    "description": "El aire Philco PHS25HA3AN enfría de manera rápida tus ambientes, gracias a los deflectores de aire y el ventilador que opera a sus máximas capacidades. Además, se caracteriza por su bajo nivel sonoro, debido a que los equipos tienen compresores y ventiladores de última generación, para asegurar un funcionamiento silencioso. Ofrece control remoto y múltiples funciones.",
    "price": 41.999,
    "priceRegular": 55.000,
    "discount": 0,
    "categoryId": 5,
    "show": true,
    createdAt: new Date
},
{
    "name": "Heladera Cíclica Patrick HPK141M10S 364Lt",
    "description": "La heladera Patrick HPK141M10S cuenta con un moderno y cómodo diseño con el freezer en la parte superior y el refrigerador en la inferior. En su interior, viene con anaqueles y estantes regulables en altura que se adaptan a las diversas necesidades de guardado de productos y alimentos. Además, trae un cajón especial para frutas y verduras. Por otro lado, cuenta con un dispenser de agua incorporado en la puerta para acceder fácilmente con capacidad para 2 litros.",
    "price": 75.999,
    "priceRegular": 89.000,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Lavarropas Samsung 9kg 1400 RPM",
    "description": "El lavarropas Samsung utiliza el sistema motor Digital Inverter que trabaja sin cepillos y contiene pequeñas partes que se mueven independientemente, así hay menos probabilidad de que se desgasten o rompan y garantizan una vida más larga. Por otro lado, permite programar el final del ciclo para determinada cantidad de horas posteriores con su botón especial de Final diferido.",
    "price": 97.999,
    "priceRegular": 105.999,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Cocina Whirlpool Multigas WFX57DI 56cm",
    "description": "La cocina Whirlpool WFX57DI posee un diseño clásico en color Silver que cuenta con cuatro hornallas, horno y cajón parrilla independiente. Dispone de 1 quemador grande, 2 medianos y uno pequeño. A su vez, su construcción hermética evita que se filtre suciedad o líquidos previniendo desgaste y brindando mayor seguridad.",
    "price": 89.999,
    "priceRegular": 94.999,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Microondas Atma 700W 20Lt",
    "description": "El microondas Atma MD1720N tiene un diseño clásico en color blanco. Viene con bandeja giratoria y ventana en la puerta para poder controlar las comidas. Asimismo, posee un panel de control rotativo muy práctico y fácil de usar, donde se encuentran las diferentes funciones.",
    "price": 16.499,
    "priceRegular": 24.999,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Pava Eléctrica Philips HD9368 90",
    "description": "Con una capacidad para 1,7 litros de agua, la pava eléctrica Philips HD9368 90 es ideal para cualquier cocina. Elegante y con cuidados detalles de diseño, viene con un mango ergonómico, soportes antideslizantes y una base plana de 360 grados. Su tapa con bisagra y abertura amplia permite llenar y limpiar fácilmente su interior",
    "price": 4.999,
    "priceRegular": 6.999,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Xbox Series X Microsoft 1 TB",
    "description": "La Xbox Series X está completamente renovada y presenta un gran salto generacional respecto de la Xbox One. Esta versión te permite nuevos niveles de velocidad y rendimiento. En el corazón de la Serie X se encuentra la Xbox Velocity Architecture, que combina una unidad SSD personalizada y software integrado para disminuir significativamente los tiempos de carga dentro y fuera del juego. Simultáneamente podés moverte sin problemas entre varios juegos en un instante con Quick Resume.",
    "price": 169.999,
    "priceRegular": 179.999,
    "discount": 0,
    "categoryId": 1,
    "show": true,
    createdAt: new Date
},
{
    "name": "Celular Samsung A01 Core 16GB Azul",
    "description": "Posee una memoria interna ROM de 16 GB mientras que la externa se puede expandir mediante una tarjeta micro SD hasta 512 GB. Vas a poder almacenar videos, fotos y música sin problemas.El celular Samsung A01 Core presenta un diseño ergonómico y elegante. Con la pantalla HD de 5,3 pulgadas con una resolución de 1480 x 720 píxeles vas a poder sumergirte en tus juegos y videos favoritos",
    "price": 15.999,
    "priceRegular": 19.999,
    "discount": 0,
    "categoryId": 4,
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