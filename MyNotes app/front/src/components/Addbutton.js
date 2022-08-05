import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const Addbutton = () => {
  return (
    <div>
      <Link to="/notes/new">
      <div className="addButton">
        
        <AddIcon cursor="pointer" />
    </div>
      </Link>
    </div>
  )
}

export default Addbutton
