import React, { Component } from 'react'
import Footer from '../components/shared/Footer'
import { Link } from 'react-router-dom'

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showBikes = () => {

    const { bikes } = this.props

    return bikes.map(bike => {
      
      return (
        <Link to={`/bikes/${bike._id}`}>
          <div className="item" key={bike._id}>
            <h2>{bike.brand}</h2>
            <p>{bike.type}</p>
            <p>${bike.price}</p>
            <p>{bike.location}</p>
            <img src={bike.image} alt={bike.type} />
          </div>
        </Link>
      )
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