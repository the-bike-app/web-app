import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Landing from '../screens/Landing'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Bike from '../screens/Bike'
import Bikes from '../screens/Bikes'
import BikeCreate from '../screens/BikeCreate'
import BikeEdit from '../screens/BikeEdit'
import Browse from '../screens/Browse'
import AuthenticatedRoute from './AuthenticatedRoute'
const Routes = ({ user, bikes, setUser, clearUser, addBike }) => (
  <Switch>

    <Route
      exact
      path="/"
      render={props => (user ? <Home /> : <Landing {...props} bikes={bikes} />)}
    />

    <Route
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} />}
    />

    <Route
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />

    <Route 
      path='/browse'
      component={Browse}
    />

    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />

    <AuthenticatedRoute
      exact
      path="/bikes"
      user={user}
      render={props => <Bikes {...props} user={user} bikes={bikes} />}
    />
    <AuthenticatedRoute
      exact
      path="/bikes/:id"
      user={user}
      render={props => <Bike {...props} />}
    />
    <AuthenticatedRoute
      exact
      user={user}
      path="/bikes/:id/edit"
      render={props => <BikeEdit {...props} />}
    />
    <AuthenticatedRoute
      user={user}
      path="/create"
      render={props => <BikeCreate {...props} addBike={addBike} />}
    />
  </Switch>
)

export default Routes