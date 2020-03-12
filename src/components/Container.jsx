import React, { Component } from 'react'
import { getBikes } from '../services/bikes'
import Routes from '../routes'
import Header from '../screens/Header'
import { verifyToken } from '../services/auth'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      bikes: []
    }
  }

  async componentDidMount() {
    const user = await verifyToken()
    if (user) {
      try {
        const bikes = await getBikes()
        this.setState({ bikes })
      } catch (err) {
        console.error(err)
      }
    }
  }

  addBike = bike => this.setState({ bikes: [...this.state.bikes, bike] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { user, bikes } = this.state
    return (
      <>
        <Header user={user} />
        <main className="container">
          <Routes
            bikes={bikes}
            user={user}
            setUser={this.setUser}
            addBike={this.addBike}
            clearUser={this.clearUser}
          />
        </main>
      </>
    )
  }
}