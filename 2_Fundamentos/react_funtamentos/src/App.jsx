// Components
import FirstComponent from "./components/FirstComponent"
import TesteComponent from "./components/TesteComponent"
import TemplateExpressions from "./components/TemplateExpressions"
import Events from "./components/Events"
import Challenge from "./components/Challenge"

// Styles / CSS
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TesteComponent /> 
        <TemplateExpressions/>
        <Events/>
        <Challenge/>
      </div>
    </>
  )
}

export default App
