import logo from '../../../public/logo.png'
const Home = () => {

    return (
        <div className='col-md-3' style={{margin:'10px'}}>
            <h2 style={{'margin': '20px'}}> Bem Vindo</h2>
            <img style={{'margin': '0px'}}src={logo} width={1000} height={500} />
        </div>
    );
}

export default Home;