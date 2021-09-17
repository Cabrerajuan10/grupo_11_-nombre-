const path = require ('path');
module.exports = {
   /* home : (req,res) => res.render(path.join(__dirname,'..','views','home')),*/

  home : (req,res) =>{
        return res.render('home')
    },
    
}