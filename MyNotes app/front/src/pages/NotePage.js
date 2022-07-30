import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const NotePage = () => {

  let {id}=useParams()

  let [note,setNote]= useState(null);

  useEffect(()=> {
    getNote();
  },[id])

  let getNote = async () => {
    let response = await fetch (`http://127.0.0.1:8000/api/notes/${id}/`)
    let data = await response.json();
    setNote(data);
  }

  return (
    <div>
      <h5>{note?.body}</h5>
    </div>
  )
}

export default NotePage
