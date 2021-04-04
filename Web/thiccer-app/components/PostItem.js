import postStyles from '../styles/Posts.module.css'
import LikeButton from './LikeButton'

var likes;

const postItem = ({post}) => {
    return(
        <a className={postStyles.card} PID={post.PID}>
            <div className={postStyles.UserInfo} >
                <h3>{post.User}</h3>
            </div>
            <p style={{ wordBreak: 'break-all' }}>{post.Content}</p>
            <hr></hr>
            <div className = {postStyles.PostFooter}>
                <div className = {postStyles.LikesContainer}>
                    <LikeButton postID = {post.PID}/>
                    <p className={postStyles.Likes}>{GetLikeCount(post.Likes)}</p>
                </div>
                <p className={postStyles.Date}>{post.Date}</p>
            </div>
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