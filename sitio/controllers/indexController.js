const fs = require('fs');
const path = require ('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
const categories = require('../data/categories.json');

module.exports = {

    home : (req,res) =>{
        return res.render('home', {
            title : "Community Electro",
        })
    },

    admin : (req,res) => {
        return res.render('admin',{
            title : "Administración",
            products: JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            categories
        })
    }

}