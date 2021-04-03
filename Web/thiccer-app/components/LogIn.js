import { useCookies } from "react-cookie"

const LogIn = () => {
return(
  <form id="login">
      <div className = "containerBox">
        <h3>User:</h3>
        <input type="text" className="text" id="txtUser"></input><br/>
        <h3>Password:</h3>
        <input type="password" className="text" id="txtPass"></input><br/>
        <button onClick={login} className="button" id="btnlogin">Login</button>
        <button onClick={createAccount} className="button" id="btnCreate">Create Account</button>
      </div>
  </form>
)
}

const createAccount = async event => {
    //event.preventDefault();
    var usernameElement = document.getElementById("txtUser")
    var passwordElement = document.getElementById("txtPass")
    console.log(usernameElement.value)
    //Check if user exists
    //check password
    saveCookie(usernameElement.value)
}
const login = async event => {
    event.preventDefault();
    var usernameElement = document.getElementById("txtUser")
    var passwordElement = document.getElementById("txtPass")
    console.log(usernameElement.value)
    //Check if user exists
    //check password
   //saveCookie(usernameElement.value)
}

function saveCookie(accountName){
    var today = new Date(); // Actual date
    var expire = new Date(); // Expiration of the cookie

    var cookie_name = "user"; // Name for the cookie to be recognized
    var number_of_days = 10; // Number of days for the cookie to be valid (10 in this case)
  
    expire.setTime( today.getTime() + 60 * 60 * 1000 * 24 * number_of_days ); // Current time + (60 sec * 60 min * 1000 milisecs * 24 hours * number_of_days)

    document.cookie = cookie_name + "=" + escape(accountName) + "; expires=" + expire.toGMTString(); 
}

export default LogIn