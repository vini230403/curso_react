import { useState, useEffect } from 'react'
import './App.css'
  
const url = "http://localhost:3000/products"

function App() {
  const[products, setProducts] = useState([])

  // 1 - Resgatando dados
  
  useEffect(() => {

    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)

      
    }

    fetchData()
  }, [])
 

  return (
      <div >
        <h1>Lista de produtos</h1>
        <ul>
          {products.map((products) => (
            <li key={products.id}>
              {products.name} - R$: {products.price}
            </li>  
          ))}
        </ul>
      </div>
      

  )
}

export default App
