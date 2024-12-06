const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        
        console.log("Ativou");
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Também pode ser isso</h1>
        }
    }
    
    return(
        <div>

            <div>
                <button onClick={handleMyEvent}>
                    Clique aqui!
                </button>
            </div>      
            <div>
                <button onClick={() => console.log("Clicou")}>
                    Clique aqui também!
                </button>
            </div>
            <div>
                <button onClick={() =>{
                    if (true){
                        console.log("Isso não deveria existir :(");
                    }
                }}
                >
                    Clica aqui, por favor.
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>    
    )
}

export default Events;