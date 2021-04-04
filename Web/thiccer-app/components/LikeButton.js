
const LikeButton = ({postID}) =>{
    return(
        <button id={postID} onClick={hitAPI}>Like</button>
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
    window.location.reload();
    }


export default LikeButton