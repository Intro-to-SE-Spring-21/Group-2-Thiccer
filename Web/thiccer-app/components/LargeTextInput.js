import React from 'react';
import styles from '../styles/LargeTextInput.module.css'
import btnstyles from '../styles/Button.module.css'

var userInput;

const getValue = (event) => {
     userInput = event.target.value;
}


const LargeTextInput = () => {
    return(
        <div className={styles.container}>
            <form action="">
                <div>
                    <h2 className={styles.headText}>Create A Thiccer Post!</h2>
                    <lable htmlFor=""></lable>
                    <textarea
                        maxLength = "250"
                        className={styles.textarea}
                        onChange = {getValue}/>
                </div>
                    <button className={btnstyles.button} onClick={hitAPI}>Submit</button>
            </form>
        </div>
    )
}


const hitAPI = async event => {
    event.preventDefault();

    var user = getcurUser();
    var time = getcurTime();
    console.log(user);
    const jsonPackage = JSON.stringify({
            "User": user,
            "Content": userInput,
            "Date" : time
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
    
    window.location.replace('./');
}

function getcurUser(){
    var curUser = getCookie("user");
    if(curUser == "" || curUser == null){
        curUser = "Anon";
    }
    return curUser;
}

function getcurTime(){
    var d = new Date();
    //Day Month Year Cooler
    var str = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    console.log(str);
    return str;
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