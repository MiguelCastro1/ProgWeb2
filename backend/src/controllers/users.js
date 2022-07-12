const models = require('../models/index');
const Sequelize = require('sequelize');
const Usuario = models.Usuario;
const Op = Sequelize.Op;
const bcrypt = require('bcryptjs');

const index = async(req,res) => {
    //const page = req.query.page ? 1: 2;
    //const offset
    const usuarios = await Usuario.findAll({});
    res.status(200).json(usuarios);
};

const create = async(req,res) => {
    try{
        const usuario = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })

        if(usuario){
            res.status(500).json({
                message: 'Email já cadastrado!'
            });
        }
        
        bcrypt.genSalt(process.env.BCRYPTJS_ROUNDS, (err,salt) => {
            bcrypt.hash(req.body.senha, salt, async (err,hash) => {
                await Usuario.create({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: hash,
                    tipoUsuarioId: '1',
                });
                res.status(201).json({
                    message: 'Usuario criado com sucesso!'
                });
            })
        })
    }catch(e){
        console.log(e.errors)
        res.status(500).json({error: e});
    }
};

const read = async(req,res) => {
    const {id} = req.params;
    try{
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            res.status(200).json({usuario});
        }else{
            res.status(204).json();
        }
    }catch(e){
        console.log(e.errors);
        res.status(500).json({error: e});
    }
};

const update = async(req,res) => {
    const usuario = await Usuario.findOne({where : {id: req.params.id}});
    if(Usuario){
        try{
            const usuario_update = await Usuario.update({
                ...req.body
            }, { where : {id: req.params.id}});
            
            res.status(200).json({usuario_update});
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
   const usuario = await Usuario.findOne({where : {id: req.params.id}});
   if(Usuario){
        try{
                await Usuario.destroy({where: {id: id}});
                res.status(200).json({message:'Usuario removido com sucesso!'});  
        }catch(e){
            console.log(e);
            res.status(500).json({error: e});
        }
    }else{
        res.status(204).json();
    }
};

export default { index, create, read, update, remove };

