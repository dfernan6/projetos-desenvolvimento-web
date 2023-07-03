import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'
import React from 'react'

export default function Estiloso() {
    return (
        <Layout>
        <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estilo usando CSS módulos</h1>
        </div>
        </Layout>
    )
}