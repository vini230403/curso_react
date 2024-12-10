import './App.css'
import Myform from './components/Myform'

function App() {
  
  return (
    <div>
      <h2>Forms</h2>
      <Myform user={{name: "Vinícius" , email: "vini@gmail.com", bio: "Olá", role: "editor" }}/>
    </div>
  )
}

export default App
