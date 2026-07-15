import React, { useState } from 'react'

const Form = () => {
    let [name, setName] = useState("");

    let handlechange = (e) =>{
        setName(e.target.value);       
    }
    let handelsubmit = (e) =>{
        e.preventDefault();
        console.log(name)
    }
  return (
    <div>
        <form action="" onSubmit={handelsubmit}>
            <aside>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Eanter FUllname' value={name} onChange={handlechange}/>
            </aside>
            <aside>
                <button>Submit</button>
            </aside>
        </form>
    </div>
  )
}

export default Form
