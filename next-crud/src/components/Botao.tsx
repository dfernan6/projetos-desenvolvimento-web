interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props) {
    const cor = props.cor ?? 'green'
    return (
        <button className={props.className}>
            {props.children}
        </button>
    )
}