const root = window.document.getElementById('root');

function Candidato(props){
    
    const [votos, setVotos] = React.useState(0);

    function votar() {
        setVotos(votos + 1);
    }

    return (
        <>
        <h1>{props.nome}</h1>
        <h2>Votos: {votos}</h2>
        <button onClick={() => votar()}>Votar</button>
        </>
    );
}

function Votacao(){

    return (
        <>
        <h3>Candidato</h3>
        <Candidato nome="Batata palha"/> <br />
        <Candidato nome="Pure"/> <br />
        <Candidato nome="Batata assada"/> <br />
        <Candidato nome="Bata recheada"/> <br />
        <Candidato nome="Batata rutica"/> <br />
        </>
    );
}

ReactDOM.createRoot(root).render(<Votacao />);