import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UnicornShowPage = (props) => {
  const [unicorn, setUnicorn] = useState(0)
  let unicornId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/unicorns/${unicornId}`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      setUnicorn(response)
    })
  }, [])

  return(
    <div className="text-center">
      <h1>{unicorn.unicornName}</h1>
      <p>{unicorn.description}</p>
      <Link to="/unicorns">Back to full list of majestic beasts</Link>
    </div>
  )
}

export default UnicornShowPage
