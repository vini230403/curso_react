import { useEffect, useState } from "react"


const HookUseEffect = () => {
    // 1 - useEffect sem dependências
    useEffect(() => {
      //console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 - array de deps. vazio
    useEffect(() => {
        //console.log("oi")
    }, [])

    // 3 - item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState (0)

    useEffect (() => {
      if(anotherNumber > 0) {
        console.log("apenas quando anotherNumber mudar")
      }
        

    },[anotherNumber])

    // 4 - cleanup useEffect
    useEffect (() => {
        
        //const timer = setTimeout(() => {
        //    console.log("Hello world")

        //    setAnotherNumber(anotherNumber + 1)
       //}, 2000)

       // return () => clearTimeout(timer)

    },[anotherNumber])


  return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Outro número: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar número</button>
        <hr />
    </div>
  )
}

export default HookUseEffect