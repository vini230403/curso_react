import { useState, ChangeEvent } from "react"

const State = () => {

  const [text, setText] = useState<string | null>(null)

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={changeText} />
    </div>
  )
}

export default State