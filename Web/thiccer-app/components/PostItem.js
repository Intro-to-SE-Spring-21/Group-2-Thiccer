import postStyles from '../styles/Posts.module.css'

const postItem = ({postArray}) => {
    return(
        <a className={postStyles.card}>
            <h3>{postArray.UID}</h3>
            <p>{postArray.Content}</p>
        </a>
    )
}

export default postItem