
const firstLetter = require('../utils/firstLetter');
const{validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

/* BASE DE DATOS */

const db = require('../database/models');
const {Op,Sequelize} = require('sequelize')

module.exports = {
  

    userAdd: (req,res) => {
        db.Rol.findAll()
        .then(rols => {
            res.render('userAdd',{
                rols
            })
        }).catch(error => console.log(error))

        
        

    },
    userStore: (req,res) => {
        let errors = validationResult(req);
      


        if (errors.isEmpty()) {
            const { name, email, password,  rolId } = req.body;

            db.User.create({
                name : name.trim(),
                email : email.trim(),
                password: bcrypt.hashSync(password,10).trim(),
                avatar: req.file? req.file.filename : 'avatar-default.jpg',
                rolId: rolId
               

            })
                .then(product => {
                   
                    return res.redirect('/admin')
                })
                .catch(error => console.log(error))
           
        } else {

            db.Rol.findAll()
            .then(rol => {
                return res.render('userAdd', {
                    firstLetter,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => console.log(error))
        }
    },

    userEdit: (req, res) => {
        let user = db.User.findByPk(req.params.id)
        let rols = db.Rol.findAll()

        Promise.all([rols,user])
        .then(([rols,user]) => {
            return res.render('userEdit', {
                rols,
                user,
                firstLetter
            })
        })
        .catch(error => console.log(error))
        

    },
    userUpdate: (req, res) => {

        let errors = validationResult(req);
        let user = db.User.findByPk(req.params.id)

        if (errors.isEmpty()) {
            const { name, email, password, rolId } = req.body;
         
            db.User.update(
                {
                    name : name.trim(),
                    email : email.trim(),
                    password: bcrypt.hashSync(password,10).trim(),
                    avatar: req.file? req.file.filename : 'avatar-default.jpg',
                    rolId: rolId
                },
                {
                    where : {
                        id : req.params.id
                    }
                }
            )
                .then( () => {
                    return res.redirect('/admin')
                })
        


        } else {

            let user = db.User.findByPk(req.params.id)
            let rols = db.Rol.findAll()
    
            Promise.all([users,rols])
    
            .then(([users,rols]) => {
                return res.render('userEdit', {
                    users,
                    rols,
                    firstLetter,
                    errors: errors.mapped(),
                })
            })
            .catch(error => console.log(error))

        }


      

    },
    userSearch: (req,res) => {

        let users = db.User.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.search
                }
            }
        })

            .then((users) => {
                return res.render('admin', {
                    users,
                    title: 'Resultado de la búsqueda'
                })
            })
            .catch(error => console.log(error))








    },

    userFilter: (req, res) => {
        let rol = db.Rol.findByPk(req.query.rol,{
           
            include: [
                {
                    association : 'users'
                }

            ]
        })
        let rols = db.Rol.findAll()

        Promise.all([rol, rols])

            .then(([rol, rols]) => {
                return res.render('admin', {
                    title: 'Rol: ' + req.query.rol,
                    rols,
                    rol
                })
            })
            .catch(error => console.log(error))
            
    },
    userDestroy: (req, res) => {
       
        db.User.destroy({
            where : {
                id : req.params.id,
            }
        })
            .then( () => {
                return res.redirect('/admin')
            })
            .catch(error => console.log(error))

    }

}
