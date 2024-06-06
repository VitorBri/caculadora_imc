import styles from './Tabela.module.css'

const Tabela = ({imc}) => {

    const getClass = (min, max) => {
        if (imc === null) return '';

        const imcValue = parseFloat(imc);

        if ((min === null || imcValue >= min) && (max === null || imcValue <= max)) {
            return styles.result;
        }

        return '';
    };

    return (
        <div className={styles.tabela}>
            <ul>
                <li className={getClass(null, 18.5)}>
                    <p>abaixo de 18,5</p>
                    <p>abaixo do peso</p>
                </li>
                <li className={getClass(18.6, 24.9)} >
                    <p>entre 18,6 e 24,9</p>
                    <p>peso ideal</p>
                </li>
                <li className={getClass(25.0, 29.9)}>
                    <p>entre 25,0 e 29,9</p>
                    <p>levemente acima do peso</p>
                </li>
                <li className={getClass(30.0, 34.9)} >
                    <p>entre 30,0 e 34,9</p>
                    <p>obesidade grau I</p>
                </li>
                <li className={getClass(35.0, 39.9)}>
                    <p>entre 35,0 e 39,9</p>
                    <p>obesidiade grau II</p>
                </li>
                <li className={getClass(40.0, null)}>
                    <p>acima de 40</p> 
                    <p>obesisade grau III</p>
                </li>
            </ul>
        </div>
    )
}


export default Tabela