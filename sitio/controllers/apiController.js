const db = require('../database/models');
const fs = require('fs');
const path = require('path');


module.exports = {
    getEmails : async (req,res) => {
        try {
            let result = await db.User.findOne({
                where : {
                    email : req.query.email
                }
            })
            return result ? res.status(200).json(true) : res.status(200).json(false)
           
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}