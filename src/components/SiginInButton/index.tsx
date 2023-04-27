import {signIn, signOut, useSession} from 'next-auth/react';

import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';



export function SiginInButton(){
   const [session] = useSession();

    
    return session ?(
        <button
        type='button'
        className={styles.singinInButton}
        onClick={() => signOut() }>
            
        <img src='https://sujeitoprogramador.com/steve.png' alt='Foto do usuario' />    
        Olá Moisés
        <FiX color='#737380' className={styles.closeIcon}/>
            
        </button>
    ): (
        <button
        type='button'
        className={styles.singinInButton}
        onClick={() => signIn('github')  }>

        <FaGithub color='#FFB800'/>
            Entrar com o Github
        </button>
    )
}