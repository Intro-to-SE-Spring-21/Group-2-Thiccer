import PostItem from './PostItem'
import postStyles from '../styles/Posts.module.css'

const PostList = ({postArray}) => {
    return (
        <div className={postStyles.grid}>

        {postArray.map ((postArray) => (
            <PostItem post = {postArray}/>
        ))}

        </div>
    )
}

export default PostList