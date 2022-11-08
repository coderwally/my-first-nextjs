import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My First...</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.rainbow}>
          Welcome to my first deployment
        </h1>
        <div className={styles.twitterlink}>
          <FaTwitter /> 
          <Link target='_blank' href='https://twitter.com/traderwally7'>@traderwally7</Link>
          <FaTwitter /> 
        </div>
      </main>
    </div>
  )
}
