import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { getBikeById } from '../services/bikes'
import { images} from '../services/constants'


class Bike extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bike: null,
    }
  }

  async componentDidMount() {
    try {
      const bike = await getBikeById(this.props.match.params.id)
      this.setState({ bike })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { bike } = this.state

    if (!bike) {
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
        </div>
    )
  }
}

export default Bike