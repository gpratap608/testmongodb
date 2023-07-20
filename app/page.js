import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
          <form>
            <input placeholder='Input Name'
                   type='text'
            ></input>
            <input placeholder='Input age'
                   type='Number'
            ></input>
            <input placeholder='Input Email'
                   type='email'
            ></input>
          </form>
    </main>
  )
}
