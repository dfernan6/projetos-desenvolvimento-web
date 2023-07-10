interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props) {
    const cor = props.cor ?? ''
    return (
        <button onClick={props.onClick} className={cor}>
            {props.children}
        </button>
    )
}