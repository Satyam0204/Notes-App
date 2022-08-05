import React,{useState,useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { ReactComponent as Arrowleft } from '../assets/arrowleft.svg'
const NotePage = () => {

  let {id}=useParams()

  let [note,setNote]= useState();

  let navigate= useNavigate();
  
  useEffect(()=> {
    getNote();
  },[id])

  

  let getNote = async () => {
    if (id==='new'){
      return;
    }

    let response = await fetch (`http://127.0.0.1:8000/api/notes/${id}/`)
    let data = await response.json();
    console.log(data)
    setNote(data);
  }

  let updateNote = async () => {
     await fetch(`http://127.0.0.1:8000/api/notes/${id}/update`,{
      method: "PUT",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
      
    })
  }

  let deleteNote = async () => {
     await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete`,{
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json'
      },

      
    })
    navigate('/')
  }


  let createNote = async () => {
    await fetch('http://127.0.0.1:8000/api/notes/create',{
      method : 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(note)
    })

  }





  let handleSubmit = () => {
    if(id!=='new'){
      updateNote()
      navigate('/')
    }
    else if(id==='new'){
      createNote()
      navigate('/')
    }
  }

  return (
    <div>
      <h3 className='header'>
        <Arrowleft cursor="pointer" onClick={handleSubmit} />
      {id!=='new' ? <button className="header btn" onClick={deleteNote} >Delete</button> :
      <button className='header btn' onClick={handleSubmit}>Done</button>}
      </h3>
      
      <textarea onChange={(e)=>{setNote({...note,'body': e.target.value})}} defaultValue={note?.body}  ></textarea>
    </div>
    
  )
}

export default NotePage
