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

    const jsonPackage = JSON.stringify({
            "UID": 0,
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

export default LargeTextInput