import React, { useState, useEffect } from 'react'

import UnicornTile from './UnicornTile'

const UnicornIndexContainer = (props) => {
  const unicornListItems = props.unicorns.map((unicornObject) => {
    return(
      <UnicornTile
        key={unicornObject.id}
        id={unicornObject.id}
        name={unicornObject.unicornName}
        description={unicornObject.description}
      />
    )
  })

  return(
    <div>
      <h1>Look At These Majestic Beasts</h1>
      <h5>
        <ul>{unicornListItems}</ul>
      </h5>
    </div>
  )
}

export default UnicornIndexContainer
