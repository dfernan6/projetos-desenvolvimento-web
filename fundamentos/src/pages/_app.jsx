import styles from '../styles/globals.css'
import Exemplo from './exemplo'
import Link from 'next/link'

export default function App() {
  return (
           <div>
            <Exemplo />
            <Link href="/estiloso">
              Estiloso
            </Link>
            <h1>Hello World!</h1>
           </div>
          )
}
