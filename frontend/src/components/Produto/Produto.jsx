import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';


const Produto = () => {
    const [produto, setProduto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        try{
            api.get(`/produtos/${id}`)
            .then(response => {
                
                setProduto(response.data.produto);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        }catch(error){
            console.log(error);
        }
    },[]);

    return (
        <div>
            <h1>Produto</h1>
            <h2> {produto.nome} </h2>
            <h2> {produto.preco} </h2>
            <h2> {produto.estoque} </h2>
            <h2> {produto.descricao} </h2>
        </div>
    );
}

export default Produto;