import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/axios';
import { TextField } from '@mui/material';


const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const [search, setSearch] = useState('');
    const [searchProdutcs, setSearchProdutcs] = useState([]);
    
    useEffect(() => {
        try{
            api.get('/produtos')
            .then(response => {
                console.log(response)
                setProdutos(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        }catch(error){
            console.log(error)
        }
    },[]);

    useEffect(() => {
        setSearchProdutcs(produtos.filter(produto => produto.nome.toLowerCase().includes(search.toLowerCase())));
    }, [search]);

    return (
        <div>

        <h1 style={{"margin":"10px"}}>Listagem de Produtos</h1>
        
        <TextField margin="normal" size="medium" id="standard-basic" value={search} onChange={(e) => setSearch(e.target.value)} label="Busca" variant="outlined" />
        <ul className="list-group">
            {search === '' ? 
                produtos.map((produto, index) => {
                    return <li className="list-group-item" key={index}> <Link to={`/produto/${produto.id}`}> {produto.nome} </Link> </li>
                }) :
                searchProdutcs.map((produto, index) => {
                    return <li className="list-group-item" key={index}> <Link to={`/produto/${produto.id}`}> {produto.nome} </Link> </li>
                })
            } 
        </ul>
        </div>
    );
}

export default Produtos;