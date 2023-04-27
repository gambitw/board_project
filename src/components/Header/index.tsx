import Link from 'next/link';
import styles from './styles.module.scss';
import {SiginInButton} from '../SiginInButton';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <Link href='/'>
                <img src='/images/logo.svg' alt='Logo meu board'></img>
                </Link>

                <nav>
                    <Link href='/'>
                      Home
                    </Link>
                    <Link href='/board'>
                      Meu board
                    </Link>
                </nav>

                <SiginInButton />
            </div>
        </header>
    )
}