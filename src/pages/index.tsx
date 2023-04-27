import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
     <Head>
          <title>Board - Organizando sua tarefa.</title>
     </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...</h1>
          <p>
            <span>100% gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donaters}>
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario 1" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario 1" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario 1" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="Usuario 1" />
        </div>
      </main>
    </>
  )
}
