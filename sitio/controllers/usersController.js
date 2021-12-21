const bcrypt = require('bcryptjs');
const fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../database/models');

module.exports = {

    register: (req, res) => {
        return res.render('./users/register')
    },

    processRegister: async (req, res) => {
        /*  return res.send(req.body) */

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, email, password } = req.body;


            try {

                let userExist = await db.User.findOne({
                    where: {
                        email
                    }
                })
                if (userExist) {
                    return res.render('./users/register',
                        {
                            error: {
                                email: 'Este email ya esta registrado'
                            }
                        })
                }

                let user = await db.User.create({
                    name: name,
                    email: email,
                    password: bcrypt.hashSync(password, 10),
                    avatar: 'avatar-default.jpg',
                    rolId: 1
                })

                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar,
                    rolid: user.rol
                }


                return res.redirect('/')



            } catch (error) {
                console.log(error)
            }



        } else {
            return res.render('./users/register', {
                errores: errors.mapped(),
                old: req.body
            })
        }

    },

    login: (req, res) => {
        return res.render('./users/login', {
            title: "Login"
        })
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        const { email, recordar } = req.body;

        if (errors.isEmpty()) {

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(user => {
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar,
                    rol: user.rolId
                }
                if (req.body.remember) {
                    res.cookie('communityElectro', req.session.userLogin, { maxAge: 1000 * 300 })
                }
                return res.redirect('/')
            })


        } else {
            return res.render('./users/login', {
                errores: errors.mapped()
            })
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('communityElectro')
        res.redirect('/')
    },


    profile: (req, res) => {
        db.User.findByPk(req.session.userLogin.id)
            .then(user => res.render('./users/profile', {
                user
            })).catch(error => console.log(error))
    },

    update: async (req, res) => {     // edicion de perfil
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            try {


                let user = await db.User.findByPk(req.session.userLogin.id)

                let userResult = await db.User.update({
                    name: req.body.name,
                    email: user.email,
                    password: req.body.password ? bcrypt.hashSync(req.body.password, 10) : user.password,
                    avatar: req.file ? req.file.filename : user.avatar
                }, {
                    where: {
                        id: req.session.userLogin.id
                    }
                    

                })

                let user1 = await db.User.findByPk(req.session.userLogin.id)

                req.session.userLogin = {
                    id: user1.id,
                    name: user1.name,
                    avatar: user1.avatar,
                    rolid: user1.rol
                }

                return res.redirect('/users/profile')

            } catch (error) {
                console.log(error)
            }


        }




    }
}