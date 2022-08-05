import React,{useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import Addbutton from '../components/Addbutton'
const NoteListPage = () => {

    let [notes,setNotes]= useState([])

    useEffect(()=>{
        getNotes()
    },[])

    let getNotes= async () => {
        let response= await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        console.log(data);
        setNotes(data);
    }

  return (
    <>
    
      {notes.map((note,index)=>(
        
        <ListItem key={index} note={note}/>
        
        ))}


    <Addbutton/>
    </>
  )
}

export default NoteListPage
