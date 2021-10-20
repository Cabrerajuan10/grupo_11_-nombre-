const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
const categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));
const firstLetter = require('../utils/firstLetter');
const {validationResult} = require('express-validator');
const { dirname } = require('path');

module.exports = {

    carrito:(req, res) =>{
        res.render('carrito',{
            title: 'Carrito de compras'
        })
    },

    add : (req,res) => {
        return res.render('productAdd',{
            categories,
            firstLetter
        })
    },
    store : (req,res) => {
        let errors = validationResult(req);

        let images = req.files.map(image => image.filename);

        if(errors.isEmpty()){
            const {name,description,price,discount,category} = req.body;

            let product = {
                id : products[products.length - 1].id + 1,
                name : name.trim(),
                description : description.trim(),
                price : +price,
                discount : +discount,
                category,
                image : req.files.length != 0 ? images : ['default.jpg'],
                features : []
            }
            products.push(product);

            fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(products,null,3),'utf-8');
    
            return res.redirect('/admin')
        }else{
            return res.render('productAdd',{
                categories,
                firstLetter,
                errors : errors.mapped(),
                old : req.body
            })
        }
    },
    detail : (req,res) => {
    
        let product = products.find(product => product.id === +req.params.id);

        return res.render('detailProduct',{
            product,
            products : products.filter(product => product.category === product.category)
        })
    },
    edit : (req,res) => {
        return res.render('productEdit',{
            product : products.find(product => product.id === +req.params.id),
            categories,
            firstLetter,
        })
    },
    update : (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {name,description,price,discount,category} = req.body;
            let product = products.find(product => product.id === +req.params.id);
    
            let productModified = {
                id : +req.params.id,
                name : name.trim(),
                description : description.trim(),
                price : +price,
                discount : +discount,
                category,
                image : product.image,
                features : product.features
            }
    
            let productsModified = products.map(product => product.id === +req.params.id ? productModified : product);
    
            fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');
    
            return res.redirect('/admin')
        }else{
            return res.render('productEdit',{
                product : products.find(product => product.id === +req.params.id),
                categories,
                firstLetter,
                errors : errors.mapped(),
                
            })
        }
       


    },
    search : (req,res) => res.render('admin',{
        title : 'Resultado de la búsqueda',
        categories,
        products : products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
    }),
    filter : (req,res) => res.render('admin',{
        title : 'Categoría: ' + req.query.category,
        categories,
        products : products.filter(product => product.category === req.query.category)
    }),
    destroy : (req,res) => {
        let product = products.find(product => product.id === +req.params.id);

        product.image.forEach(img => {
            fs.existsSync(path.join(__dirname,'../public/images/detailProduct',img)) ? fs.unlinkSync(path.join(__dirname,'../public/images/detailProduct',img)) : null;
            
        });

        let productsModified = products.filter(product => product.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');

        return res.redirect('/admin')    
    }
}
