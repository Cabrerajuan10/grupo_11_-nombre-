const path = require ('path');
module.exports = {
    /* register : (req,res) => res.render(path.join(__dirname,'..','views','register')),
    login : (req,res) => res.render(path.join(__dirname,'..','views','login')) */

    register : (req,res) =>{
        return res.render('register')
    },
    login : (req,res) =>{
        return res.render('login')
    }
}