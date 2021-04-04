import React from 'react';
import inputStyles from '../styles/LargeTextInput.module.css'

var userInput;

const getValue = (event) => {
     userInput = event.target.value;
}


const LargeTextInput = () => {
    return(
        <>
            <form action="">
                <div>
                    <lable htmlFor=""></lable>
                    <textarea
                        maxLength = "250"
                        className={inputStyles.textarea}
                        onChange = {getValue}/>
                </div>
                    <button onClick={hitAPI}>Submit</button>
            </form>
        </>
    )
}


const hitAPI = async event => {
    event.preventDefault();

    var user = getcurUser();

    console.log(user);
    const jsonPackage = JSON.stringify({
            "User": user,
            "Content": userInput,
            "Date" : "0"
        });

    console.log(jsonPackage);
    const res = await fetch(
        'http://localhost:1337/post',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: jsonPackage
        }
    );
    
    const result = await res.json();
    
    console.log(result);
}

function getcurUser(){
    var curUser = getCookie("user");
    if(curUser == "" || curUser == null){
        curUser = "Anon"
    }
    return curUser;
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

export default LargeTextInput