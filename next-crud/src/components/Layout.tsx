import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props) {
    return (
        <div className="layout">
            <Titulo>
            <div className="titulo">
                {props.titulo}
            </div>
            </Titulo> 
            <div className="conteudo">
                {props.children}
            </div>
        </div>
    )
}