import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <a href='/test'>Go to test page(Click me)</a>
    </div>
  )
}
