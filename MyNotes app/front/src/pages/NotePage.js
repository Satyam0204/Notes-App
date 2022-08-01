import React,{useState,useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const NotePage = () => {

  let {id}=useParams()

  let [note,setNote]= useState(null);

  let navigate= useNavigate();
  
  useEffect(()=> {
    getNote();
  },[id])

  

  let getNote = async () => {
    let response = await fetch (`http://127.0.0.1:8000/api/notes/${id}/`)
    let data = await response.json();
    setNote(data);
  }

  let updateNote = async () => {
     await fetch(`http://127.0.0.1:8000/api/notes/${id}/update`,{
      method: "PUT",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
      
    })
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/')
  }

  return (
    <div>
      <textarea onChange={(e)=>{setNote({...note,'body': e.target.value})}} defaultValue={note?.body}  ></textarea>
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}

export default NotePage
