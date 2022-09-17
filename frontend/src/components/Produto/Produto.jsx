import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';

const Produto = () => {
    const [produto, setProduto] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

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

    const handleDelete = () => {
        console.log('deleting')
        try{
            api.delete(`/produtos/${id}`)
            .then(response => {
                console.log(response);
                navigate(`/`)
            })
            .catch(error => {
                console.log(error);
            });

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div style={{margin:'10px'}}>
            <div style={{'margin':'10px'}}>
                <div className='float-end '>
                    <Button style={{'margin':'0px 10px 0px 10px'}} size='large' variant="contained" onClick={()=> navigate(`/produto/${produto.id}/edit`)} startIcon={<EditIcon />}></Button>  
                    <Button  size='large' variant="contained" color='error' onClick={() => handleDelete()} startIcon={<DeleteForeverIcon />}></Button>  
                </div>
           
            </div>  
           <div className="list-group">
            <h3 className="list-group-item list-group-item-action flex-column align-items-start active"> <span style={{'font-weight': 'bold'}}>Produto: </span>{produto.nome} </h3>
                <p className='list-group-item list-group-item-action flex-column align-items-start'> <span style={{'font-weight': 'bold'}} > Preço: </span> {produto.preco} </p>
                <p className='list-group-item list-group-item-action flex-column align-items-start'> <span style={{'font-weight': 'bold'}} >Estoque: </span> {produto.estoque} </p>
                <p className='list-group-item list-group-item-action flex-column align-items-start'> <span style={{'font-weight': 'bold'}} >Descrição: </span> {produto.descricao} </p>
            </div>
        </div>
    );
}

export default Produto;