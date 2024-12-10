const UserDetails = ({nome, job, age}) => {
  return (
    <div>
        <h3>Detalhes da pessoa</h3>
            <p>Nome: {nome} </p>
            <p>Idade: {age} anos</p>
            <p>Profissão: {job}</p>
            {age >= 18 ? (<p>Pode tirar carteira de habilitação</p>) : (<p>Menor de idade</p>)}     
    </div>
  )
}

export default UserDetails