import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"

const Contato = () => {
  const{counter} = useCounterContext()
  
  
  return (
    <div>
      <h1>Contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Contato