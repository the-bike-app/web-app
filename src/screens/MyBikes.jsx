import React from 'react'
import { deleteBike, getBikeById } from '../services/bikes'
import { images } from '../services/constants'
import Footer from '../components/shared/Footer'


class MyBikes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bikes: []
    }
  }

  componentDidMount = () => {
    if (this.state.bikes.length < 1) {
      this.props.user.users_bikes.map(async (bike) => {
        const response = await getBikeById(bike)
        this.setState(prevState => ({ bikes: [...prevState.bikes, response] }))
      })
    }
  }

  renderBikes = () => {

    if (this.state.bikes) {

      return this.state.bikes.map(bike => {
        let bikeImg = ''
        bike.image ? bikeImg = bike.image : bikeImg = images[bike.type]
        return (
          <div className='myBikesLists' key={bike._id}>
            <div className='myBikesAll'>
              <div className='myBikesInfo'>
                <div>Brand: <span className="value" >{bike.brand}</span></div>
                <div>Type: <span className="value" >{bike.type}</span></div>
                <div>Location: <span className="value" >{bike.location}</span></div>
                <div>Description: <span className="value" >{bike.description}</span></div>
                <div>Price: <span className="value" >{bike.price}</span></div>
              </div>
              <div className='myBikesPics'>
                <img src={bikeImg} alt="bike" />
              </div>
            </div>
            <div className="myBikesButtons">
              <button value={bike._id} onClick={this.destroy}>Delete </button>
              <button
                className="edit"
                value={bike._id}
                onClick={(e) => {
                  this.props.history.push(
                    `/users/${this.props.user._id}/bikes/${e.target.value}/edit`
                  )
                }}
              >Edit</button>
            </div>
          </div>
        )
      })
    } else {
      return null
    }
  }

  destroy = (e) => {
    deleteBike(e.target.value)
      .then(() => {
        this.setState({ bikes: [] })
        this.componentDidMount()
      })
      .catch(console.error)
  }

  render() {

    return (
      <>
        <div className='myBikesPage'>
          <div className="buttons sellMyBike">
            <button className="edit" onClick={() => this.props.history.push(`/users/${this.props.user._id}/create`)}>+ New Bike</button>
          </div>
          <div className='allBikeCards'>{this.renderBikes()}</div>
        </div>
        <Footer />
      </>
    )
  }
}

export default MyBikes