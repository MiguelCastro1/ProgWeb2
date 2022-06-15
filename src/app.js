import express from "express";
import router from "./routes/index";

//dotenv.config();
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(router)

app.use((req,res) => {
    res.status(404).send('Erro 404 Not Found');
});

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));

//CREATE USER 'skiefree'@'localhost' IDENTIFIED BY  'Senha@123456';