const {Item} = require('../models')

class itemController{

    static async getItems (req, res){
        try {
            const result = await Item.findAll();
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }


    static async create (req, res){
        try {
            const {name, category,price,stock,UserId} = req.body;
            // res.send(`${name} , ${category} , ${price} , ${stock}, ${UserId}`)
            const result = await Item.create({name, category, price, stock, UserId});
            res.status(201).json(result);
        } catch (error) {
            res.status(404).json(error)
        }
    }


    static async delete (req, res){
        try {
            const {id} = req.params;
            const result = await Item.destroy({
                where: {id},
                returning : true
            });

            result === 1 
            ? res.status(200).json({message: `Item ${id} Berhasil Dihapus`
            })
            : res.status(200).json({message: `Item ${id} Gagal Dihapus`
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update (req, res){
        try {
            const id = req.params.id;
            const {name, category,price,stock,UserId} = req.body;

            const result = await Item.update({name, category, price, stock, UserId},
                 { 
                    where : {id},
                    returning: true
                 }
                );

            result[0] === 1 
            ? res.status(200).json({message: `Item ${id} Berhasil Diupdate`})
            : res.status(200).json({message: `Item ${id} Gagal Diupdate`});
            // res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message)
        }
    
    }
    static async getDetails (req, res){
        try {
            const id = req.params.id;
            const result = await Item.findOne({
                where : {id}
            });
            // res.status(200).json(result);
            result === null 
            ?res.status(404).json({message : `Item Dengan Id ${id} tidak ditemukan`})
            :res.status(200).json(result)
            
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = itemController;