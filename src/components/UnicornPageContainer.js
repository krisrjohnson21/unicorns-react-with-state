import React, { useState, useEffect } from 'react'

import UnicornIndexContainer from './UnicornIndexContainer'
import UnicornForm from './UnicornForm'

const UnicornPageContainer = () => {
  const [unicorns, setUnicorns] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      setUnicorns(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const addNewUnicorn = (newUnicornPayload) => {
    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(newUnicornPayload)
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setUnicorns([
        ...unicorns,
        body
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return(
    <div>
      <UnicornIndexContainer
        unicorns={unicorns}
        />
      <UnicornForm
        addNewUnicorn={addNewUnicorn}
        />
    </div>
  )
}

export default UnicornPageContainer
