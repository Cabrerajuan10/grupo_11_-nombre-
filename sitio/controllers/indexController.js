const db = require('../database/models')
const {Op,Sequelize} = require('sequelize')


module.exports = {
    home: (req, res) => {
        let ofertas = db.Product.findAll({
            where: {
                discount: {
                    [Op.gte]: 25
                },
                show: true
            },

            limit: 4,
            include: [
                'images',
                'category'
            ],
            order: Sequelize.literal('rand()')
        })
        let products = db.Product.findAll({
            where: {
                categoryId: {
                    [Op.like]: 1
                }
            },
            limit: 6,
            include: [
                'images',
                'category'
            ],
            order: Sequelize.literal('rand()')
        })

        Promise.all([ofertas, products])

            .then(([ofertas, products]) => {
                return res.render('home', {
                    title: 'CommunityElectro',
                    ofertas,
                    products

                });
            })
            .catch(error => console.log(error))



    },
    admin: (req, res) => {
        let products = db.Product.findAll({
            include: ['images', 'category']

        })
        let categories = db.Category.findAll()

        Promise.all([products, categories])
            .then(([products, categories]) => {
                return res.render('admin', {
                    title: "Administración",
                    products,
                    categories
                })
            })
            .catch(error => console.log(error))

    }

}