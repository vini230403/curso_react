import './App.css'
import CarCh from './components/CarCh'


function App() {
  
    const cars = [
      {id: 1, marca:"Fiat", cor:"Amarelo", km:1000},
      {id: 2, marca:"BMW", cor:"Azul", km:0},
      {id: 3, marca:"VW", cor:"Vermelho", km:15000},
      {id: 4, marca:"Renault", cor:"Verde", km:20000},
      {id: 5, marca:"KIA", cor:"Laranja", km:0},
    ]


  return (
    <>
      <div>
        <h1>Desafio CSS (carros)</h1>
        <div className='car-container'>
        {cars.map((car)=> (
          <CarCh
            key={car.id}
            marca={car.marca}
            cor={car.cor}
            km={car.km}
          
          />
        ))}
        </div> 
      </div>
      
    </>
  )
}

export default App
