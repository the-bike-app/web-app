import React, { Component } from 'react'
import Footer from '../components/shared/Footer'
import { Link } from 'react-router-dom'
import { brands, types, boroughs } from '../services/constants'
import Dropdown from '../components/shared/Dropdown'

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: '',
      searchedBike: null,
      bike: {
        brand: '',
        type: '',
        location: ''
      },
    
    }
  }

  searchBikes = (event) => {
    this.setState({
      choice: event.target.value
    })
  }
  handleChange = event => {
    
    const updatedField = { [event.target.name]: event.target.value }

    const editedBike = Object.assign(this.state.bike, updatedField)

    this.setState({ bike: editedBike })
    console.log(this.state.bike)
  }

  filterBikes = () => {
    let filter1 = (this.state.bike.brand.length > 1 ? this.props.bikes.filter(bike => bike.brand === this.state.bike.brand) : this.props.bikes)
    let filter2 = (this.state.bike.type.length > 1 ? filter1.filter(bike => bike.type === this.state.bike.type) : filter1)
    let filter3 = (this.state.bike.location.length > 1 ? filter1.filter(bike => bike.location === this.state.bike.location) : filter2)
    console.log(filter3)
    if (this.props.user) {
      return (<>{filter3.map(bike => {
        return <div className='browse-bike-div'>
          <Link to={`/bikes/${bike._id}`}>
          <div className="item" key={bike._id}>
            <img className="browse-image" src={bike.image} alt={bike.type} />
          </div>
          <div className="browse-details">
            <h2>{bike.brand}</h2>
            <p>{bike.type}</p>
            <p>${bike.price}</p>
            <p>{bike.location}</p>
          </div>
          </Link>
          </div>
      })}</>)
    }
    else {
      return (<>{filter3.map(bike => {
        return (
          <div className='browse-bike-div'>
          <Link to={`/sign-in`} style={{ textDecoration: 'none' }}>
          <div className="item" key={bike._id}>
            <img className="browse-image" src={bike.image} alt={bike.type} />
          </div>
          <div className="browse-details">
            <h2>{bike.brand}</h2>
            <p>{bike.type}</p>
            <p>${bike.price}</p>
            <p>{bike.location}</p>
          </div>
        </Link>
        </div>)
      })}</>)
    }
      
  }

  render() {

    const { bikes, user } = this.props
    const { choice, searchedBike } = this.state
    const { searchBikes, filterBikes } = this

    return (

      <>
        <div className="browse-title">

          <h1>Browse</h1>
          <div className = 'browseDropdowns'>
          <Dropdown
            listName="brand"
            choices={brands}
            handleChange={this.handleChange}
            bike={this.bike}
            selected='none'
            className= 'browseDD'
          />
          <Dropdown
            listName="type"
            choices={types}
            handleChange={this.handleChange}
            bike={this.bike}
            selected='none'
            className= 'browseDD'
          />
          <Dropdown
            listName="location"
            choices={boroughs}
            handleChange={this.handleChange}
            bike={this.bike}
            selected='none'
            className= 'browseDD'
          />
          </div>

          <div className='bikes-container'>
            {this.filterBikes()}
          </div>

          <Footer />

        </div>
      </>
    )
  }
}

export default Browse