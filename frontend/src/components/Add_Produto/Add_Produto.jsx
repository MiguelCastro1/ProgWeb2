import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import { useNavigate } from 'react-router-dom';


const Add_Produto = () => {
    const navigate = useNavigate();
    const [nome,setNome] = useState('');
    const [nomeErro,setNomeErro] = useState('');
    const [descricao,setDescricao] = useState('');
    const [preco,setPreco] = useState(0);
    const [estoque,setEstoque] = useState(10);
    const [ispending, setIspending] = useState(false);

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const produto = {nome, descricao, preco, estoque};
        setIspending(true);

        try{
            api.post(`/produtos`, produto)
           
            .then(response => {
                console.log('done')
                console.log({response});
                setIspending(false);
                navigate(`/produto/${response.data.produto.id}`)
            })
            .catch(error => {
                console.log('erro1')
                console.log(error);
                error.response.data.error.errors.forEach(element => {
                    if(element.path === 'nome') {
                        setIspending(false);
                        setNomeErro(element.message);
                    }
                })
            });

        }catch(error){
            console.log('erro2')
            console.log({error});
            error.response.data.error.errors.forEach(element => {
                if(element.path === 'nome'){
                    setIspending(false);
                    setNomeErro(element.message);
                }
            })
        }
    }

    return (
        <div  className='col-md-6' style={{margin:'10px'}}>
            <div >
            <h2> Add Produtos
            <button style={{margin:'10px'}} className=' btn btnsm btn-primary '  onClick={() => navigate(-1)}>
                 Voltar
            </button>
            </h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome</label>
                    
                    <input 
                        className={nomeErro == '' ? 'form-control' : 'form-control is-invalid'}
                        type="text" 
                        required
                        name="nome" 
                        id="nome" 
                        value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                    />
                      <div className='invalid-feedback' style={{display:'block'}}>
                        {nomeErro}
                    </div>


                    <label htmlFor="descricao">Descricao</label>
                    <textarea 
                        className='form-control'
                        type="text" 
                        required
                        name="descricao" 
                        id="descricao" 
                        value={descricao}
                        onChange={(e)=>setDescricao(e.target.value)}
                    >
                        </textarea> 
                  
                    <label htmlFor="preco">Preço</label>
                    <input 
                        className='form-control' 
                        type="number" 
                        name="preco"
                        required
                        id="preco"
                        value={preco}
                        onChange={(e)=>setPreco(e.target.value)}
                    />

                    <label htmlFor="estoque">estoque</label>
                    <select 
                        name="estoque" 
                        className='form-control' 
                        required
                        id="estoque"
                        value={estoque}
                        onChange={(e)=> setEstoque(e.target.value)}
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">+100</option>
                    </select>
                    <label htmlFor="imagem">Imagem</label>
                    <input 
                        className='form-control' 
                        type="file" 
                        name="imagem"
                        required
                        id="imagem"
                       
                    />
                    {ispending ? (
                        <button disabled className='btn btn-primary btn-lg mt-3' type='submit'> Enviando Dados ... </button>
                    ) : (
                        <button className='btn btn-primary btn-lg mt-3' type='submit'> Criar</button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Add_Produto;