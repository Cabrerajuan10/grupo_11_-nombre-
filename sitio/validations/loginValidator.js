const {body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');//requiere la base de datos de community electro


module.exports = [
    body('email')
    .custom((value,{req}) => {
        console.log(req.body)
        return db.User.findOne({                  // consulta de la base de datos en la tabla de usuarios. El usuario que coincida con el email.   
            where :{
                email : value
            }
        }).then(user => {
            if(!user || !bcrypt.compareSync(req.body.password,user.password)){ // en el caso que usuario/contraseña no se encuentre en la base de datos devuelve error.
                
                return Promise.reject()
            }
        }).catch( () => Promise.reject('Credenciales inválidas'))
    })
]