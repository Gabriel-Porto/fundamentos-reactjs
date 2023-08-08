import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Gabriel-Porto.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Porto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='08 de Agosto às 10:33h' dateTime='2023-08-08 10:33:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Comente algo sobre esse post' />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className="commentList">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}