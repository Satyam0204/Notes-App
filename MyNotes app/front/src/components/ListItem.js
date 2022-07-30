import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {
 
  return (
    <Link to={`/notes/${note.id}/`}>

      <h4>{note.body}</h4>

    </Link>
  )
}

export default ListItem
