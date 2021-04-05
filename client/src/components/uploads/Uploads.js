import React,{useState} from 'react'
import { FaFileUpload } from 'react-icons/fa'
import axios from 'axios'

function Uploads() {
    const [fileUpload,setFileUpload]=useState('')

    const uploadHandler=(e)=>{
        e.preventDefault();
        axios.post('').then(data=>{
            
        })
    }
    return (
        <div>
           <form onSubmit={(e)=>uploadHandler(e)}>
           <input type="file" onChange={(e) => setFileUpload(e.target.files[0])}/>
           <button type="submit">upload</button>
           </form>
        </div>
    )
}

export default Uploads
