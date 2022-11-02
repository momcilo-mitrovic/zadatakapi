import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Detailpage from './components/Detailpage'
import Homepage from './components/Homepage'
import Products from './components/Products'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/products">
          <Homepage />
        </Route>
        <Route exact path="/products/:id">
          <Detailpage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
