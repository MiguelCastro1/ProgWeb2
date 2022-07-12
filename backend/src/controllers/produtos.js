const models = require('../models/index');
const Sequelize = require('sequelize');
const Produto = models.Produto;
const Op = Sequelize.Op;
import {v4 as uuidv4} from 'uuid';

const index = async(req,res) => {
    const produtos = await Produto.findAll({});
    res.status(200).json(produtos);
};

const create = async(req,res) => {
    try{
        let produto = await Produto.create({
            //id: uuidv4(),
            ...req.body
        });
        res.status(201).json({
            produto,
            message: 'Produto criado com sucesso!'
        });
    }catch(e){
        console.log(e.errors)
        res.status(500).json({error: e});
    }
};

const read = async(req,res) => {
    const {id} = req.params;
    try{
        const produto = await Produto.findByPk(id);
        if(produto){
            res.status(200).json({produto});
        }else{
            res.status(204).json();
        }
    }catch(e){
        console.log(e.errors);
        res.status(500).json({error: e});
    }
};

const update = async(req,res) => {
    const produto = await Produto.findOne({where : {id: req.params.id}});
    if(produto){
        try{
            const produto_update = await Produto.update({
                ...req.body
            }, { where : {id: req.params.id}});
            
            res.status(200).json({produto_update});
        }catch(e){
            console.log(e.errors);
            res.status(500).json({error: e});
        }
    }else{
        res.status(204).json();
    }
};

const remove = async(req,res) => {
   const {id} = req.params;
   const produto = await Produto.findOne({where : {id: req.params.id}});
   if(produto){
        try{
                await Produto.destroy({where: {id: id}});
                res.status(200).json({message:'Produto removido com sucesso!'});  
        }catch(e){
            console.log(e);
            res.status(500).json({error: e});
        }
    }else{
        res.status(204).json();
    }
};

export default { index, create, read, update, remove };

