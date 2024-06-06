import styles from './Resultado.module.css'

const Resultado = ({imc}) => {
    return (
        <div className={styles.resultadoCalc}>
            <h3>Seu IMC foi de <span>{imc}</span> </h3>
        </div>
    )
}


export default Resultado