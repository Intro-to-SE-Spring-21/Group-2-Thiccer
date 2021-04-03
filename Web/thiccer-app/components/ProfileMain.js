import LogIn from './LogIn'
import ProfileDisplay from './ProfileDisplay'

function profile({userName}) {
    userName = getCookie("user")
    if(userName == null || userName ==""){
    //if not logedin
        return (
        <div>
            <LogIn/>
        </div>
        )
    }else{
        return (
            <div>
                <ProfileDisplay/>
            </div>
        )
    }
}

  profile.getInitalProps = async (ctx) => {
    user = getCookie("user")
    return{
        userName: user
    }
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


  export default profile