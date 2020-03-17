import React, { Component } from 'react'
import Footer from '../components/shared/Footer'
import { Link } from 'react-router-dom'

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: '',
      searchedBike: null
    }
  }

  searchBikes = (event) => {
    this.setState({
      choice: event.target.value
    })
  }

  filterBikes = () => {
    let filter = this.props.bikes.filter(bike => bike.brand === this.state.choice)
    this.setState({
      searchedBike: filter
    })
  }

  render() {

    const { bikes, user } = this.props
    const { choice, searchedBike } = this.state
    const { searchBikes, filterBikes } = this

    return (

      <>
        <div className="browse-title">

          <h1>Browse</h1>

          <input
            onChange={searchBikes}
            type='text'
            name='search'
            placeholder='Search By Brand'
            value={choice}
          />
          <button className='searchButton' onClick={filterBikes}>search</button>

          <div className='bikes-container'>

            {
              searchedBike === null ?
                (
                  bikes.map(bike => {

                    const { _id, brand, type, price, location, image } = bike

                    if (user) {
                      return (
                        <Link to={`/bikes/${_id}`}>
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
                )
                :
                (

                  searchedBike.map(bike => {

                    const { _id, brand, type, price, location, image } = bike

                    if (user) {
                      return (
                        <Link to={`/bikes/${_id}`}>
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
                )
            }
          </div>

          <Footer />

        </div>
      </>
    )
  }
}

export default Browse