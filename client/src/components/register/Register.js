import React,{useState} from 'react'
import './register.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Register() {
    const [firstname,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cnfPassword,setCnfPassword]=useState('')
    const [companyName,setCompanyName]=useState('')
    const [contactNo,setContactNo]=useState('')
    const history=useHistory()

    const submitHandler=(e)=>{
        e.preventDefault()
        const data={firstname,lastName,email,password,cnfPassword,companyName,contactNo}
        axios.post('',data).then(data=>{
            if(data.response===200){
                return history.push('/uploads/form/contact')
            }
        }).catch(err=>console.log(err))
    }
    return (
        <div className="register">
            <form onSubmit={(e)=>submitHandler(e)}>
                <input type="text" placeholder="first name" onChange={(e)=>setFirstName(e.target.value)} />
                <input type="text" placeholder="last name" onChange={(e)=>setLastName(e.target.value)} />
                <input type="text" placeholder="email id" onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                <input type="text" placeholder="confirm password" onChange={(e)=>setCnfPassword(e.target.value)} />
                <input type="text" placeholder="company name" onChange={(e)=>setCompanyName(e.target.value)} />
                <input type="text" placeholder="contact no" onChange={(e)=>setContactNo(e.target.value)} />
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default Register
