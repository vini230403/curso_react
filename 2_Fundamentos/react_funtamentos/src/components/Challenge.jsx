const Challenge = () => {
    
    const num1 = 3
    const num2 = 5
    
    return (
        <div>     
            <div>
                <p>O primeiro número é {num1} e o segundo número é {num2}</p>
            </div>

            <div>
                <button onClick={() => console.log(num1 + num2)}>
                    Clique aqui para saber a soma.
                </button>
            </div>
        </div>    
    )
}

export default Challenge