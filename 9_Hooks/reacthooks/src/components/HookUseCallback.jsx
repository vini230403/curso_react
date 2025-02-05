import { useCallback, useState } from "react"

import List from "./List"

const HookUseCallback = () => {
    
    const [couter, setCouter] = useState(0)

    const getItemFromDatabase = useCallback (() => {
      return ["a", "b", "c"]
    }, [])

  return (
    <div>
        <h2>useCallback</h2>
        <List getItems={getItemFromDatabase} />
        <button onClick={() => setCouter(couter + 1)}>Alterar</button>
        <p>{couter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback