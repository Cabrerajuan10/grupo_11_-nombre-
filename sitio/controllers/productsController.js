const firstLetter = require('../utils/firstLetter');
const{validationResult} = require('express-validator')

/* BASE DE DATOS */

const db = require('../database/models');
const {Op,Sequelize} = require('sequelize')

module.exports = {
    add: (req,res) => {

        db.Category.findAll()
            .then(categories => {
                return res.render('productAdd', {
                    categories,
                    firstLetter
                })
            })
            .catch(error => console.log(error))
    },
    store: (req,res) => {
        let errors = validationResult(req);


        if (errors.isEmpty()) {
            const { name, description, price, priceRegular, discount, category } = req.body;

            db.Product.create({
                name : name.trim(),
                description : description.trim(),
                price,
                priceRegular,
                discount,
                categoryId : category

            })
                .then(product => {
                    if(req.files[0] != undefined) {

                        let images = req.files.map(image => {
                            let img = {
                                file : image.filename,
                                productId : product.id
                            }
                            return img
                        });
                        db.Image.bulkCreate(images, {validate : true})
                            .then( () => console.log('imagenes agregadas'))
                    }
                    return res.redirect('/admin')
                })
                .catch(error => console.log(error))
           
        } else {

            db.Category.findAll()
            .then(categories => {
                return res.render('productAdd', {
                    categories,
                    firstLetter,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
            .catch(error => console.log(error))
        }
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['images', 'features']
        })
            .then(product => {
                db.Category.findByPk(product.categoryId, {
                    include: [
                        {
                            association: 'products',
                            include: ['images'],
                        }
                    ]
                })
                    .then(category => {
                        return res.render('detailProduct', {
                            product,
                            products: category.products
                        })
                    })
            })
            .catch(error => console.log(error))

    },
    edit: (req, res) => {
        let product = db.Product.findByPk(req.params.id)
        let categories = db.Category.findAll()

        Promise.all([product,categories])

        .then(([product,categories]) => {
            return res.render('productEdit', {
                categories,
                product,
                firstLetter
            })
        })
        .catch(error => console.log(error))

    },
    update: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, description, price, priceRegular, discount, category, show } = req.body;
         
            db.Product.update(
                {
                    name : name.trim(),
                    description : description.trim(),
                    price,
                    priceRegular,
                    discount,
                    categoryId : category,
                    show : show ? 1 : 0
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

            let product = db.Product.findByPk(req.params.id)
            let categories = db.Category.findAll()
    
            Promise.all([product,categories])
    
            .then(([product,categories]) => {
                return res.render('productEdit', {
                    categories,
                    product,
                    firstLetter,
                    errors: errors.mapped(),
                })
            })
            .catch(error => console.log(error))

        }

    },
    search: (req, res) => {

        let products = db.Product.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.search
                }
            },
            include: ['images', 'category']
        })
        let categories = db.Category.findAll()

        Promise.all([products, categories])

            .then(([products, categories]) => {
                return res.render('admin', {
                    products,
                    categories,
                    title: 'Resultado de la búsqueda'
                })
            })
            .catch(error => console.log(error))
    },
    filter: (req, res) => {

        let category = db.Category.findByPk(req.query.category,{
           
            include: [
                {
                    association : 'products',
                    include : ['images','category']
                }

            ]
        })
        let categories = db.Category.findAll();

        Promise.all([category, categories])

            .then(([category,categories]) => {
                return res.render('admin', {
                    title: 'Categoría: ' + req.query.category,
                    categories,
                    products : category.products
                })
            })
            .catch(error => console.log(error))
    },
    destroy: (req, res) => {

        let resultImage = db.Image.destroy({
            where : {
                productId : req.param.id
            }
        });
        let resultProduct = db.Product.destroy({
            where : {
                id : req.param.id
            }
        });

        Promise.all([resultImage, resultProduct])

        .then( () => {
                return res.redirect('/admin')
            })
            .catch(error => console.log(error))

    },

    carrito: (req,res) => {
        return res.render('carrito', {
            title: 'Carrito'
        })
    }
}