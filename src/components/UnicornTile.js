import React from 'react'
import { Link } from 'react-router-dom'

const UnicornTile = (props) => {
  const { id, name } = props
  return(
    <li>
      <Link to={`/unicorns/${id}`}>{name}</Link>
    </li>
  )
}

export default UnicornTile
