import Link from "next/link";

export default function Layout(props) {
    return (
        <div>
            <div>
                Layout
            </div>
            <Link href="/">Voltar</Link>
            {props.children}
        </div>
    )
}