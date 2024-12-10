import { useState } from "react"

const ListRender = () => {

  const [list] = useState(["Vinícius", "Camilly", "Eduardo"])

  const [users, setUsers] = useState([
    {id:1, name: "Vinícius", idade:21},
    {id:2, name: "Camilly", idade:21},
    {id:3, name: "Eduardo", idade:20},
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers ((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>    
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
            ))}
            </ul>
            <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.idade} anos
                </li>
            ))}
            </ul>
            <button onClick={deleteRandom}>Deletar um usuário aleatório</button>
        </div>
    </div>    
  )
}

export default ListRender