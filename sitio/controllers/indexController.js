const db = require('../database/models')
const {Op,Sequelize} = require('sequelize')


module.exports = {
    home: (req, res) => {
        
        let ofertas = db.Product.findAll({
            where: {
                discount: {
                    [Op.gte]: 10
                },
                show: true
            },

            limit: 6,
            include: [
                'images',
                'category'
            ],
            order: Sequelize.literal('rand()')
        })
        let products = db.Product.findAll({
            where: {
                discount: {
                    [Op.lte] : 0
                }                    
                
            },
            
            limit: 6,
            include: [
                'images',
                'category'
            ],
            order: Sequelize.literal('rand()')
        })

        let categories = db.Category.findAll()

        Promise.all([ofertas, products, categories])

            .then(([ofertas, products, categories]) => {

                return res.render('home', {
                    title: 'CommunityElectro',
                    ofertas,
                    products,
                    categories
                });
            })
            .catch(error => console.log(error))



    },
    admin: (req, res) => {
        
        let products = db.Product.findAll({
            include: ['images', 'category']

        })
        let categories = db.Category.findAll()
        let users = db.User.findAll({include: ['rol']})
        let rols = db.Rol.findAll()
        let rol = db.Rol.findByPk(req.query.rol,{
            include:[{

                association: 'users',
                include: ['rol']
            }
            ]
        })
        

        Promise.all([products, categories,users,rols,rol])
            .then(([products, categories,users,rols,rol]) => {
                return res.render('admin', {
                    title: "Administración",
                    products,
                    categories,
                    users,
                    rols,
                    rol,
                    active: "productos"
                })
            })
            .catch(error => console.log(error))

    },

    
   

}