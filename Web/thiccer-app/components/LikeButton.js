




import likeStyles from '../styles/Posts.module.css'

const LikeButton = ({postID}) =>{
    return(
        <div className = {likeStyles.likebutton}>
       <span> <a href="#0" class = "likebutton" id={postID} onClick={hitAPI}>Like!</a></span>
        </div>
    )
}

const hitAPI = async (event)  =>{
    event.preventDefault();
    var x = event.clientX
    var y = event.clientY
    document.elementFromPoint(x,y)

    var pid = document.elementFromPoint(x,y).id
    const jsonPackage = JSON.stringify({
            "UID": 1,
            "PID": pid
        });

    console.log(jsonPackage);
    const res = await fetch(
        'http://localhost:1337/LikePost',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: jsonPackage
        }
    );
    location.reload();
    }


export default LikeButton