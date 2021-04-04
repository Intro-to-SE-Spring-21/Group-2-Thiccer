

const ProfileDisplay = () => {
    return(
        
        <div>
            <h1>ProfileName:{getCookie("user")}</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

const logOut = async (event) => {
    document.cookie = "user" + "=; expires=0";
     window.location.reload();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export default ProfileDisplay