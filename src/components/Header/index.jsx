import styles from './Header.module.css'

const Header = ({altura, setAltura, peso, setPeso, calculaImc}) => {
    
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Calculadora IMC</h1>
            <form onSubmit={calculaImc} >
                <input value={peso} required type="text" placeholder='Peso(kg)' onChange={evento => setPeso(evento.target.value)} />
                <input value={altura} required type="text"  placeholder='Altura(cm)' onChange={evento => setAltura(evento.target.value)} />
                <button type='submit' >Calcular</button>               
            </form>
        </header>
    )
}


export default Header