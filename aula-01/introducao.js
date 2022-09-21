/*
const titulo = window.document.createElement('h1');
titulo.innerHTML = "Meu primeiro titulo com js";
root.appendChild(titulo);
*/



function Titulo(){
    return(
//      <React.Fragment>
            <h1>Meu primeiro titulo</h1>
//        </React.Fragment>
    );
}

function Titulos(){
    return(
        <>
            <Titulo />
            <Titulo />
            <Titulo />
            <Titulo />
        </>
    );
}

ReactDOM.createRoot(root).render(<Titulos />);