interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
}

export default function Botao(props) {
    const cor = props.cor ?? ''
    return (
        <button className={cor}>
            {props.children}
        </button>
    )
}