import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'
import App from './_app'
import React from 'react'

export default function Home() {
  return (
    <div>
      {App}
      <Link href="/estiloso">
        Estiloso
      </Link>
    </div>
  )
}
