import { useState } from "react"

const ManageData = () => {

    let n1 = 10
    console.log(n1)

    const [n2, setNumber] = useState(15)
    console.log(n2)

  return (
    <div>
        <div>
            <p>Valor: {n1}</p>   
            <button onClick={() => (n1 = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {n2}</p>
            <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    </div>    
  )
}

export default ManageData