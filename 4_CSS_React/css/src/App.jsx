import { useState } from "react"
import './App.css'
import MyComponent from './components/MyComponent'
import Title from "./components/Title"

function App() {
  const n = 15
  const [name] = useState("Vini")
  const redTitle = (true)

  return (
    <div>
       {/* CSS global */}
       <h1>React com CSS</h1>

       {/* CSS de component */}
       <MyComponent/>
       <p className="first-paragrafo">Oi</p>

       {/* Inline CSS */}
       <p style={{color: "blue", padding: "25px", borderTop: "10px solid red"}}>
        Este elemento foi estilizado de forma inline
       </p>

       {/* Inline dinâmico CSS */}
       <h2 style={n > 10 ? {color: "orange"} : {color: "pink"}}>
          CSS dinâmico
       </h2>
       <h2 style={n < 10 ? {color: "orange"} : {color: "pink"}}>
          CSS dinâmico
       </h2>
       <h2 style={name === "Vini" ? {color: "purple", backgroundColor: "green"} : null}>
          Teste nome
       </h2>
       <h2 style={name === "V" ? {color: "puple", backdropColor: "green"} : null}>
          Teste nome
       </h2>

       {/* Classe dinâmica CSS */}
       <h2 className={redTitle ? "red-title" : "title"}
       >Classe dinâmica
       </h2>

       {/* CSS Modules */}
       <Title/>
    </div>
      

  )
}

export default App
