import express from "express";
import router from "./routes/index";
import cookieParser from "cookie-parser";
import {v4 as uuidv4} from 'uuid';
import session from "express-session"

//require('dotenv').config(path: `${__dirname}/../../.env`);

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(cookieParser());

app.use((req,res,next) => {
    if(!("nome" in req.cookies))
        res.cookie('nome', 'valor')
    next();
})

app.get('/apaga_cookie', function(req, res){
    res.clearCookie('nome');
    res.send('cookie apagado');
    });

app.use(session({
    genid: (req) => {
        return uuidv4() // usamos UUIDs para gerar os SESSID
    },
        secret: process.env.SECRET ? process.env.SECRET : 'Hi9Cf#mK98',
        resave: true,
        saveUninitialized: true
    })
);

app.use((req, res, next) => {
    res.locals.isLogged = 'uid' in req.session;
    next();
});

app.use(router);

app.use((req,res) => {
    res.status(200).send('Hello There');
});

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));

//CREATE USER 'skiefree'@'localhost' IDENTIFIED BY  'Senha@123456';
//docker compose up