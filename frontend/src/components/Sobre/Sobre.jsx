import sobre from '../../../public/sobre.webp'

const Sobre = () => {
    return (
        <div className="sobre">
      
        <h1>Sobre</h1>
        <p>
            Loja Virtual que vende coisas
        </p>
        <img src={sobre} width={1000} height={500} />
        </div>
    );
}

export default Sobre;