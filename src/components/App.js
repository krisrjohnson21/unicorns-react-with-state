import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom" //hint-hint

import UnicornPageContainer from './UnicornPageContainer'
import UnicornShowContainer from './UnicornShowContainer'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UnicornPageContainer} />
        <Route exact path="/unicorns" component={UnicornPageContainer} />
        <Route exact path="/unicorns/:id" component={UnicornShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
