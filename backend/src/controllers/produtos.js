const models = require('../models/index');
const Sequelize = require('sequelize');
const Produto = models.Produto;
const Op = Sequelize.Op;
import {v4 as uuidv4} from 'uuid';

exports.index = async(req,res) => {
    const produtos = await Produto.findAll({});
    res.status(200).send(produtos);
};

exports.create = async(req,res) => {
    try{
        let produto = await Produto.create({
            id: uuidv4(),
            ...req.body
        });
        res.status(201).send({
            produto,
            message: 'Produto criado com sucesso!'
        });
    }catch(e){
        console.log(e.errors)
        res.status(500).send({error: e});
    }
};

exports.read = async(req,res) => {
    const {id} = req.params;
    try{
        const produto = await Produto.findByPk(id);
        res.status(200).send({produto});
    }catch(e){
        console.log(e.errors);
        res.status(500).send({error: e});
    }
};

exports.update = async(req,res) => {
    const produto = await Produto.findOne({where : {id: req.params.id}});
    try{
        const produto_update = await Produto.update({
            ...req.body
        }, { where : {id: req.params.id}});
        
        res.status(200).send({produto_update});
    }catch(e){
        console.log(e.errors);
        res.status(500).send({error: e});
    }
};

exports.remove = async(req,res) => {
   const {id} = req.params;
   try{
        await Produto.destroy({where: {id: id}});
        res.status(200).send({message:'Produto removido com sucesso!'});  
   }catch(e){
       console.log(e);
       res.status(500).send({error: e});
   }
};


