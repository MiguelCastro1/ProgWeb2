import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/axios';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
 import { useNavigate } from 'react-router-dom';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const [search, setSearch] = useState('');
    const [searchProdutcs, setSearchProdutcs] = useState([]);
    const navigate = useNavigate();

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
    }, [search, produtos]);

    return (
        <div style={{margin:'10px'}}>
            <div style={{'margin':'10px'}}>
                <h2> Listagem de Produtos
                <div className='float-end'>
                    <Button  size='large' variant="contained" onClick={()=> navigate('/produto/add')} startIcon={<AddIcon />}></Button>   
                </div>
                </h2>
            </div>  

            <div>
                <TextField style={{'margin':'10px'}} size="medium" id="standard-basic" value={search} onChange={(e) => setSearch(e.target.value)} label="Busca" variant="outlined" /> 
        
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
        </div>
    );
}

export default Produtos;