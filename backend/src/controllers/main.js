import { compare }  from "bcryptjs"
const models = require('../models/index');
const Sequelize = require('sequelize');
const Usuario = models.Usuario;

/*
const singup = async (req,res) =>{
    try{
        const {email,senha} = req.body;
        const hash = await bcrypt.hash(senha,10);
        const usuario = await Usuario.create({
            email,
            senha: hash,
            tipoUsuarioId: '1',
        });
        res.status(201).json({
            usuario,
            message: 'Usuario criado com sucesso!'
        });
    }catch(e){
        console.log(e.errors)
        res.status(500).json({error: e});
    }
}
*/

const login = async (rqe,res) =>{
    try{
        const usuario = await Usuario.findOne({where: {email: req.body.email}});

        if(!usuario)
            throw new Error('Usuario não encontrado');
        
        const isMatch = await compare(req.body.senha, usuario.senha);

        if(!isMatch){
            throw new Error('Email e/ou Senha incorreta');
        }
        
        req.session.uid = usuario.id;
        res.status(200).send({message: "Usuario autenticado"})
    }catch(e){
        console.log(e);
        res.status(500).send({error: e})
    }
}
            
const logout = async (req,res) =>{
    req.session.destroy((err) => {
        if(!err) 
            res.send(200).send({message: 'Logout realizado com sucesso'})
    });
}

export default {login, logout}