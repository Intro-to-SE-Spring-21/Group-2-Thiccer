import postStyles from '../styles/Posts.module.css'
import LikeButton from './LikeButton'

var likes;

const postItem = ({post}) => {
    return(
        <a className={postStyles.card} PID={post.PID}>
            <h3>{post.User}</h3>
            <p>{post.Content}</p>
            <hr></hr>
            <p>Likes: {GetLikeCount(post.Likes)}</p>
            <LikeButton postID = {post.PID}/>
        </a>
    )
}

function  GetLikeCount(str){
    str = String(str);
    if(str == "null"){
        return 0;
    }
    var count = (str.match(/,/g) || []).length;
    likes +=1;
    return count + 1;
    }

export default postItem