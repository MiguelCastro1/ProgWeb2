import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { login } from '../../redux/slice/UserSlice'

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [erro, setErro] = useState(false);
    const [ispending, setIspending] = useState(false);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const User = {email, senha};
        setIspending(true);

        try{
            api.post(`/login`, User)
            .then(response => {
                console.log(response);
                setIspending(false);
                
                if(response.status == 404)
                    setErro(true)
                else if(response.status == 200)
                    dispatch(login(response))
            })
            .catch(error => {
                console.log(error);
            });

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div  className='col-md-6' style={{margin:'15px'}}>
            <div >
            <h2> Login
            </h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Email</label>
                    
                    <input 
                        className={erro == '' ? 'form-control' : 'form-control is-invalid'}
                        type="text" 
                        required
                        name="Email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                   

                    <label htmlFor="preco">Senha</label>
                    <input 
                        className={erro == '' ? 'form-control' : 'form-control is-invalid'}
                        type="password" 
                        name="senha"
                        required
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    {erro && <div className='invalid-feedback' style={{display:'block'}}>
                        Email e/ou Senha Inválido
                    </div>}

                    {ispending ? (
                        <button disabled className='btn btn-primary btn-lg mt-3' type='submit'> Enviando Dados ... </button>
                    ) : (
                        <button className='btn btn-primary btn-lg mt-3' type='submit'> Login </button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Login;