import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { getBikeById } from '../services/bikes'
import { images} from '../services/constants'
import { getUserById } from '../services/users'


class Bike extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bike: null,
      user: null
    }
  }

  async componentDidMount() {
    try {
      const bike = await getBikeById(this.props.match.params.id)
      const user = await getUserById(bike.user)
      this.setState({ bike, user })
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    const { bike, user } = this.state

    if (!bike || !user) {
      return <p>Loading...</p>
    }
    let bikeImg = ''
    bike.image ?  bikeImg = bike.image : bikeImg = images[bike.type]
    return (
        <div className="bike">
          <Link to="/browse">
            <span> Back to all bikes</span>
          </Link>
            <div>Brand: {bike.brand}</div>
            <div>Type: {bike.type}</div>
            <div>Location: {bike.location}</div>
            <div>Description: {bike.description}</div>
            <div>Price: {bike.price}</div>
            <div>Picture: <img src={bikeImg} alt="bike" /></div>
            <div>Seller: {user.username}</div>
        </div>
    )
  }
}

export default Bike