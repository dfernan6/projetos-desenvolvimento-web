import styles from '../styles/Estiloso.module.css'


export default function Cabecalho(props) {

    return (
        <header className={styles.roxo}>
            <h1>{props.titulo}</h1>
        </header>
    )
}