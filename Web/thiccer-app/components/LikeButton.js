var pid;
const LikeButton = ({postID}) =>{
    pid = postID;
    console.log(postID);
    return(
        <button onClick={hitAPI}>Like</button>
    )
}

const hitAPI = async (event)  =>{
    event.preventDefault();
    console.log(pid);
    const jsonPackage = JSON.stringify({
            "UID": 1,
            "PID": postID
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