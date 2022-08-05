import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {
 
  return (
    <Link to={`/notes/${note.id}/`}>
        <p className='listitem' >

        {note.body}

          </p>
        </Link>
  )
}

export default ListItem
