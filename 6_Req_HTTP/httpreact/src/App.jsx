import { useState, useEffect } from 'react'
import './App.css'

// 4
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  const[product, setProduct] = useState([])

  // 4
  const {data: items, httpConfig, loading, error} = useFetch(url)

 

  const [name, setName] = useState ("")
  const [price, setPrice] = useState ("")

  // 1 - Resgatando dados
  
  /*useEffect(() => {

    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setProduct(data)

      
    }

    fetchData()
  }, [])*/

  // 2 - Add de produtos

  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "constent-Type": "application/json"
      },
      body: JSON.stringify(product),
    })

    // 3 - Carregamento dinâmico
    const addedProduct = await res.json()

    setProduct((prevProduct) => [...prevProduct, addedProduct])*/

    // 5
    httpConfig(product, "POST")

   
    setName("")
    setPrice("")  

  }

  // 8 

  const handleRemove = (id) =>{
    httpConfig(id, "DELETE'")
  }
 
  
  return (
      <div >
        <h1>Lista de produtos</h1>
        {/* 6 */}
        {loading && <p>Carregando dados...</p>}
        {!error && <p>{error}</p>}
        {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>  
          ))}
        </ul>
        )} 
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/* 7 - State de loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
            </form>    
        </div>
      </div>
      

  )
}

export default App
