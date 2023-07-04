import Link from "next/link"

export default function Navegador(props) {
    return (
        <div>
            <Link href={props.destino}>
              {props.texto}
            </Link>
        </div>
    )
}