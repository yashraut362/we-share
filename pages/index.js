import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../components/homepage'
import Sendemail from '../components/sendemail'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage></Homepage>
      <Sendemail></Sendemail>
    </div>
  )
}
