import './App.css'
import { createContext } from 'react'

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent'


// 5 - desestruturando props
import Destructuring, {Category} from './components/Destructuring'
import SecondComponent from './components/SecondComponent'


// 6 - useState
import State from './components/State'

// 10 - utilizando contexto 
import Context from './components/Context'

// 7 - type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

// 8 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext <IAppContext | null>(null)

function App() {
  
  // 1 - variaveis
  const name: string = "Vini"
  const age: number = 21
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name:string, age:number) => {
    return `Olá, me chamo ${name} e tenho ${age} anos de idade`
  }

  // 7 - type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  mySecondText = ""

  const testandoFixed: fixed = "Isso"

  // 8 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }


  return (
    <AppContext.Provider value={contextValue} >
      <div>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Não está trabalando</p>
        )}
        <h3>{userGreeting(name, age)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring 
          title='Primeiro post'
          content='Algum conteúdo'
          commentQty={10}
          tags={["ts "]} 
          category={Category.TS}
        />
        <Destructuring 
          title='Segundo post'
          content='Algum conteúdo diferent'
          commentQty={10}
          tags={["js "]}
          category={Category.JS} 
        />
        <Destructuring 
          title='Terceiro post'
          content='Algum outro conteúdo'
          commentQty={30}
          tags={["python "]}
          category={Category.P} 
        />
        <State />
        {myText && 
          <p>Tem texto na variável</p>
        }
        {mySecondText && 
          <p>tem texto aqui também</p>
        }
        <p>{testandoFixed}</p>
        <Context />
      </div>
    </AppContext.Provider>
  )
}

export default App
