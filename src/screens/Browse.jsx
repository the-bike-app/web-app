import React, { Component } from 'react'
import Footer from '../components/shared/Footer'
import { Link } from 'react-router-dom'

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bikes: '',
      filter: ''
    }
  }

  searchBikes = (event) => {
    this.setState({
      filter: event.target.value
    })
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
          <Link to={`/sign-in`} style={{ textDecoration: 'none' }}>
            <div className="item" key={_id}>
              <img className="browse-image" src={image} alt={type} />
            </div>  
              <div className="browse-details">
                <h2>{brand}</h2>
                <p>{type}</p>
                <p>${price}</p>
                <p>{location}</p>
              </div>   
            
          </Link>
        )
      }
    })
  }

  render() {

    const { searchBikes } = this
    const { filter } = this.state

    return (

      <>
        <div className="browse-title">

          <h1>Browse</h1>

          <input
            onChange={searchBikes}
            type='text'
            name='search'
            placeholder='Search Bikes'
            value={filter}
          />

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