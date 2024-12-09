import { Fragment, useState } from 'react'
import './App.css'
import Paisagem from "./assets/Img1.jpg"
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'
import ConditionalRender from './Components/ConditionalRender'
import ShowUserName from './Components/ShowUserName'
import CarDetails from './Components/CarDetails'
import Fragmennt from './Components/Fragmennt'
import Container from './Components/Container'
import ExecuteFunctions from './Components/ExecuteFunctions'
import Message from './Components/Message'
import ChangeMessageState from './Components/ChangeMessageState'
import UserDetails from './Components/UserDetails'


function App() {
  const [userName] = useState("Sibeli")

  const cars = [
    {id: 1, marca: "Ferrari", cor:"Vermelha", newCar: true, km: 0},
    {id: 2, marca: "KIA", cor:"Amarelo", newCar: false, km: 1000},
    {id: 3, marca: "BMW", cor:"Cinza", newCar: true, km: 0},
  ]

  const pessoas = [
    {id: 1, nome: "Vinícius", job:"Programador", age: 21},
    {id: 2, nome: "Guilherme", job:"Estudante", age: 13},
    {id: 3, nome: "Camilly", job:"Atendente", age: 21},
    {id: 4, nome: "Eduardo", job:"Farmaceutico", age: 20},
    {id: 5, nome: "Rafaela", job:"Estudante", age: 14},
  ]
 
  function showMessage() {
    console.log("Evento do componente pai")
  }

  const[message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  return (
    <>
      <div>
        <h1>Avançando em React</h1>  
        {/* Imagem em public */}
        <img src ="Img2.jpg" alt="CidadeFuturista"/>
        {/* Imagem em asset */}
        <img src={Paisagem} alt="Paisagem"/>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* props */}
        <ShowUserName name={userName}/>
        {/* destructuring */}
        <CarDetails marca="Fiat" km={10000} cor="Rosa" newCar={false}/>
        {/* reaproveitamento */}
        <CarDetails marca="VW" km={0} cor="Azul" newCar={true}/>
        <CarDetails marca="Ford" km={15000} cor="Preto" newCar={false}/>
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
          key={car.id} 
          marca={car.marca} 
          cor={car.cor} 
          km={car.km} 
          newCar={car.newCar} 
          />
        ))}
        {/* fragment */}
        <Fragmennt propsFragment = "teste" />
        {/* children */}
        <Container myValue="testando">
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="testando 2">
          <p>Testando o container</p>
        </Container>
        {/* executar função */}
        <ExecuteFunctions myFunction={showMessage} />
        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

        {pessoas.map((pessoa)=> 
          <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          job={pessoa.job}
          age={pessoa.age}
          />
        )}
        

      </div>
     
    </>
  )
}

export default App
