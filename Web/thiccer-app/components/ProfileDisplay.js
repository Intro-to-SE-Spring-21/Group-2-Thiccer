import styles from '../styles/ProfileDisplay.module.css'
import btnstyles from '../styles/Button.module.css'

const ProfileDisplay = () => {
    return(
        <div className={styles.containerBox}>
            <h1 className={styles.headText}>User Name: {getCookie("user")}</h1>
            <button className={btnstyles.button} onClick={logOut}>Log Out</button>
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