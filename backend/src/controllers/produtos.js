const models = require('../models/index');
const Sequelize = require('sequelize');
const Produto = models.Produto;
const Op = Sequelize.Op;

const index = async(req,res) => {
    //const page = req.query.page ? req.query.page: 1;
    //const offset = req.query.offset ? req.query.offset: 0;

    const produtos = await Produto.findAll({});
    res.status(200).json(produtos);
};

const create = async(req,res) => {
    try{
        if(req.file){
            const {originalname: file, filename: path_file} = req.file;
            const produto = await Produto.create({
                ...req.body,
                 file, 
                 path_file
            });
        }else{
            const file = "padrao";
            const path_file = "padrao.png";
            let produto = await Produto.create({
                //id: uuidv4(),
                ...req.body
              
            });
        }
       
        res.status(201).json({
            produto,
            message: 'Produto criado com sucesso!'
        });
    }catch(e){
        console.log(e)
        res.status(500).send    ({error: e});
    }
};

const read = async(req,res) => {
    const {id} = req.params;
    try{
        const produto = await Produto.findByPk(id);
        if(produto){
            res.status(200).json({produto});
        }else{
            throw new Error('Produto não encontrado!');
        }
    }catch(e){
        console.log(e);
        res.status(500).send({error: e});
    }
};

const update = async(req,res) => {
    const produto = await Produto.findOne({where : {id: req.params.id}});
    try{
        if(!produto)
            throw new Error('Produto não encontrado!');
       
        if(req.file){
            const {originalname: file, filename: path_file} = req.file;
            const produto = await Produto.update({
                ...req.body,
                file, 
                path_file
            },{ where : {id: req.params.id}});
        }else{
            const produto_update = await Produto.update({...req.body}, { where : {id: req.params.id}});
        }
        res.status(200).json({produto_update});
    }catch(e){
        console.log(e);
        res.status(500).json({error: e});
    }
};

const remove = async(req,res) => {
   const {id} = req.params;
   const produto = await Produto.findOne({where : {id: req.params.id}});
    try{
        if(!produto)
            throw new Error('Produto não encontrado!');

        const produto = await Produto.destroy({where: {id: id}});
        res.status(200).json({produto,message:'Produto removido com sucesso!'});  

    }catch(e){
        console.log(e);
        res.status(500).json({error: e});
    }
};

export default { index, create, read, update, remove };

