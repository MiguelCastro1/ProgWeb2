import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import Header from '../Header/Header';

const Produto = () => {
    const [produto, setProduto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        try{
            api.get(`/produtos/${id}`)
            .then(response => {
                console.log(response);
                setProduto(response.data);
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
            <Header />
            <h1>Produto</h1>
            <h2> {produto.nome} </h2>
            <h2> {produto.preco} </h2>
            <h2> {produto.estoque} </h2>
        </div>
    );
}

export default Produto;