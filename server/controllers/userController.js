const { where } = require('sequelize');
const {User} = require('../models')
const bcrypt = require('bcrypt')

class UserController{

    static async getUser (req, res){
        try {
            const result = await User.findAll();
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    static async register (req, res){        
        try {
            const {username,email,password,role} = req.body;
            const image = 'https://via.placeholder.com/100';
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = bcrypt.hashSync(password, salt);
            
            const result = await User.create({
                username,
                email,
                password : hashPassword,
                role,
                image
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async login(req, res){
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {email}
            });

            if(user){
                if(bcrypt.compareSync(password, user.password)){
                    res.status(200).json({message:'Login Succes'});
                }
                else{
                    res.status(400).json({message: 'Password Salah'});
                }
            }
            else{
                res.status(404).json({message: `Email ${email} Tidak Terdaftar`})
            }
        } catch (error) {  
            res.status(200).json(error.message);
        }
    }

    static async update(req, res){
        try {
            const {username,email,password,image,role} = req.body;
            const id = req.params.id;
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = bcrypt.hashSync(password, salt);

            const result = await User.update({
                username,
                email,
                password : hashPassword,
                image,
                role
            },{
                where: {id}
            }
            );

            result[0] === 1
            ? res.status(200).json({message: `User ${id} Berhasil Diupdate`})
            : res.status(404).json({message: `User ${id} Gagal Diupdate`});

        } catch (error) {
            res.status(404).json(error.message);
        }
    }
    static async delete(req, res){
        try {
            const result = await User.destroy({
                where : {id : req.params.id} 
            })
            result === 1
            ? res.status(200).json({message: `User ${req.params.id} Berhasil Dihapus`})
            : res.status(200).json({message: `User ${req.params.id} Gagal Dihapus`});
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async getDetails(req, res){
        try {
            const result = await User.findOne({
                where :{id: req.params.id}
            });

            result===null
            ? res.status(404).json({message: `User ${req.params.id} Tidak Ditemukan`})
            : res.status(200).json(result);

            // res.status(200).json(result)
        } catch (error) {
            res.status(404).json({message: `Error ${error.message}`})
        }
    }

}

module.exports= UserController;