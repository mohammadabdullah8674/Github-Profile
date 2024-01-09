import React, { useState } from 'react'
import searchIcon from "../assets/Search.svg"

function InputBox({OnSubmit: onSubmitHandler}) {
    const [inputUser, setInputUser] = useState("")
    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        if(e.target[0].value){
            onSubmitHandler(e.target[0].value)
        }
    }
    return (
        <>
            <div className="input__box">
                <img src={searchIcon} alt="search Icon" onClick={()=>onSubmitHandler(inputUser)} />
                <form onSubmit={(e)=>onSubmitFormHandler(e)}>
                <input 
                type="text" 
                placeholder='username' 
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
                />
                </form>
                
            </div>
        </>
    )
}

export default InputBox