import Head from 'next/head'
import Image from 'next/image'
import Countdown from '../components/countdown'
import styles from '../styles/Home.module.css'

export default function Home() {
  const year = "2023"
  const month = "06"
  const day = "25"
  const clock = "23.00"

  return (

    <div className={styles.container}>
      <h2>hello world</h2>
      <Countdown year={year} month={month} day={day} clock={clock}/>
      
    </div>
  )
}
