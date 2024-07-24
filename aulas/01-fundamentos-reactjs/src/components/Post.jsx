import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props)
{
    console.log(props);

    return (
        <article className = {styles.post}>
            <header>
                <div className = { styles.author }>
                    <Avatar src="https://avatars.githubusercontent.com/u/52306002?v=4" alt="Foto de perfil" />
                        <div className = { styles.authorInfo }>
                            <strong>Germain Girndt</strong>
                            <span>Web Developer</span>
                        </div>
                </div>

                <time title = "20 de julho às 20:37h" dateTime = "2023-07-20 20:36:56">Publicado há 1h</time>
            </header>

            <div className = {styles.content}>
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p><a href = "">jane.design/doctorcare </a></p>
                <p>
                    <a href = "">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className= { styles.commentForm }>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type = "submit">Publicar</button>
                </footer>
            </form>


            <div className = {styles.commentList} >
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}