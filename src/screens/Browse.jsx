import React, { Component } from 'react'
import Footer from '../components/shared/Footer'
import { Link } from 'react-router-dom'

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showBikes = () => {

    const { bikes, user } = this.props

    return bikes.map(bike => {

      const { _id, brand, type, price, location, image } = bike

      if (user) {
        return (
          <Link to={`/bikes/${_id}`}>
            <div className="item" key={_id}>
              <h2>{brand}</h2>
              <p>{type}</p>
              <p>${price}</p>
              <p>{location}</p>
              <img src={image} alt={type} width='60px' height='60px' />
            </div>
          </Link>
        )
      } else {
        return (
          <Link to={`/sign-in`}>
            <div className="item" key={_id}>
              <h2>{brand}</h2>
              <p>{type}</p>
              <p>${price}</p>
              <p>{location}</p>
              <img src={image} alt={type} width='60px' height='60px' />
            </div>
          </Link>
        )
      }

    })
  }

  render() {
    return (

      <>
        <div className="browse-title">
          <h1>Browse</h1>
          <div className='bikes-container'>
            {this.showBikes()}
          </div>
          <Footer />
        </div>
      </>

    )
  }
}

export default Browse