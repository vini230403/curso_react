import styles from './CarCh.module.css'

const CarCh = ({marca, cor, km}) => {
  return (
    <div className={styles.card}>
        <h2>Detalhes dos carros</h2>
        <p>Marca: {marca}</p>
        <p>Cor: {cor}</p>
        <p>KM: {km}</p>
    </div>
  )
}

export default CarCh