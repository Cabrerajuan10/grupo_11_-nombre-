const bcrypt = require('bcryptjs');
const path = require ('path');
const fs = require('fs');
let users = require(path.join(__dirname,'../data/users.json'))
const {validationResult} = require('express-validator');

module.exports = {

    register : (req,res) =>{
        return res.render('./users/register')
    },

    processRegister : (req,res)=>{
       /*  return res.send(req.body) */
       let errors = validationResult(req);

       if(errors.isEmpty()){
          const {name,email,password} = req.body;

        let user = {
            id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
            name : name.trim(),
            email : email.trim(),
            password : bcrypt.hashSync(password,10),
            avatar : 'avatar-default.jpg',
            rol : "user"
        }
        users.push(user);
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');


        req.session.userLogin = {
            id : user.id,
            name : user.name,
            avatar : user.avatar,
            rol : user.rol
        }


        return res.redirect('/') 
       }else{
       return res.render('./users/register',{
                errores : errors.mapped(),
                old : req.body
            })
       }
        
    },
        
    login : (req,res) =>{
        return res.render('./users/login', {
            title: "Login"
        })
    },

    processLogin : (req,res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
            req.session.userLogin = {
                id : user.id,
                name : user.name,
                avatar : user.avatar,
                rol : user.rol
            }
            if(req.body.remember){
                res.cookie('communityElectro',req.session.userLogin,{maxAge : 1000 * 60})
            }
            return res.redirect('/')
        }else{
            return res.render('./users/login',{
                errores : errors.mapped()
            })
        }
    },

    logout : (req,res) =>{
        req.session.destroy()
        res.redirect('/')
    },

    profile : (req,res) =>{
        let user = users.find(user => user.id === req.session.userLogin.id)
      return  res.render('./users/profile',{
          user
      })
      
    },

    update : (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let user = users.find(user => user.id === req.session.userLogin.id);
            let hashPass = req.body.password ? bcrypt.hashSync(req.body.password,10) : user.password;
            console.log(req.body.password)
            let userModified = {
                id : user.id,
                name : req.body.name,
                email : user.email,
                password : hashPass,
                avatar : req.file ? req.file.filename : user.avatar,
                rol : user.rol
            }

            if(req.file){
                if(fs.existsSync(path.join(__dirname,'../public/images/users/' + user.avatar)) && user.avatar != "avatar-default.jpg"){
                    fs.unlinkSync(path.join(__dirname,'../public/images/users/' + user.avatar))

                }
            }
    
            let usersModified = users.map(user => user.id === req.session.userLogin.id ? userModified : user);
    
            fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(usersModified,null,3),'utf-8');
    
            req.session.userLogin = {
                id : user.id,
                name : userModified.name,
                avatar : userModified.avatar,
                rol : user.rol
            }
    
            return res.redirect('/users/profile')
        }else{
            res.render('./users/profile',{
                user : users.find(user => user.id === req.session.userLogin.id),
                errors : errors.mapped()
            })
        }

       
    }
} 