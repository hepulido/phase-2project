import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionsForm.css'

export default function QuestionsForm() {
    const navigate = useNavigate();
    // const [data , setData]= useState({
    //     name:"", 
    //      email:"", 
    //      ownHouse:"", 
    //     goodCredit:""

    // })
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[ownHouse, setOwnHouse]= useState("yes");
    const[goodCredit, setGoodCredit]= useState("yes");
    const [message, setMessage] = useState("");

    const handleSubmit =  (e) => {
        console.log("email: ", email);
        console.log("ownHouse: ", ownHouse);
        console.log("name: ", name);
        console.log("goodCredit: ", goodCredit);
        e.preventDefault();
        // const newData ={...data}
        // newData[e.target.id]=e.target.value
        // setData(newData)
        fetch("http://localhost:3001/userData",  {
        method: "POST",
        header:{"content-Type": "application/json" },
          body: JSON.stringify({
            name:name, 
            email:email, 
            ownHouse:ownHouse, 
            goodCredit:goodCredit,
            
          })
        })
        .then(res => res.json)
        .then((data) => {
        console.log("new post "+ data)
        setMessage("Thank you, we will contact you soon");
        setTimeout(function(){
            navigate('/')
            },3000)
       
        })
       
    }
        return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input 
                id='name'
                type='text'
                required
                value={name}
                onChange= {(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input 
                id='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Do you own your house ?</label>
            <select
            id='ownHouse'
            value={ownHouse}
            onChange={(e) => setOwnHouse(e.target.value)}
            >
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <label>Do you have a good credit ?</label>
            <select
            id='goodCredit'
            value={goodCredit}
            onChange={(e) => setGoodCredit (e.target.value)}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <label>Details</label>
            <textarea rows='6' placeholder='Type a short message here' />
            <div className="message">{message ? <h2>{message}</h2> : null}</div>
            <button className='btn'>Submit</button>
            
        </form>
    </div>
    )
    }

