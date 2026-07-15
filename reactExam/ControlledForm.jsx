import React from 'react'
import { useState } from 'react'

const ControlledForm = () => {
let name =" Jeevan Kumar";
let rolre ="Process Developer";
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let handleusername = (e) =>{
        setUsername(e.target.value);
    }
    let handlepassword = (e) =>{
        setPassword(e.target.value);
    }
let handlesubmit =(e) =>{
    e.preventDefault();
    // console.log(username);
    // console.log(Password);

    if(username === "" || password === ""){
        alert("Please FIll All the Fields");
    }else{

        if(username === "Rakesh@123" && password === "123456"){
            alert("Login SucessFUlly");
            let details = {
            name : username,
            passcode : password,
         }
         console.log(details);
        }else{
            
            alert("Please fill valide Details");
        }

        // let details = {
        //     name : username,
        //     passcode : password,
        // }
        // console.log(details);
        // handlevalid();
    }
}

let handlevalid = ()=>{
    if(username === "Rakesh@123" && password === "123456"){
        alert("Login SucessFUlly");
    }else{
        alert("Login Filed");
    }

}

  return (
    <div>
        <p>Controlled Form</p>
      <form action="" onSubmit={handlesubmit}>
            <aside>
                <label htmlFor="">User Name</label>
                <input type="text" placeholder='Eanter Here' value={username} onChange={handleusername}/>
            </aside>
            <aside>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='Eanter Here' value={password} onChange={handlepassword}/>
            </aside>
            <aside>
                <button>Submits</button>
            </aside>
        </form>
    </div>
  )
}

export default ControlledForm
