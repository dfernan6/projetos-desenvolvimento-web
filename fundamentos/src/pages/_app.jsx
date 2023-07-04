import styles from '../styles/globals.css'
import Navegador from '@/components/Navegador'

export default function App() {
  return (
           <div>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" />
           </div>
          )
}
