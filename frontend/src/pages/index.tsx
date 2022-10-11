import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

import { DelayInput } from '../../components/DelayInput'

const H1 = styled.h1`
  color: red;
`
const P = styled.p`
  color: ${(props) => props.theme.colors.orange};
  font-size: ${(props) => props.theme.fontSizes[3]};
`

const some = () => {
  console.log('aaaa')
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <H1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>

        <P className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </P>

        <div>
          <DelayInput onChange={some}></DelayInput>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home