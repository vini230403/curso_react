import { useCounterContext } from "../hooks/useCounterContext"
import ChangeCounter from "../components/ChangeCounter"

const Sobre = () => {
  const {counter} = useCounterContext()


  return (
    <div>
      <h1>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Sobre