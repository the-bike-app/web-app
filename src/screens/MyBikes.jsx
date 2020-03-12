import React from 'react'
import { deleteBike } from '../services/bikes'

class MyBikes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bikes: [{
        _id: 1234567,
        brand: 'Schwinn',
        style: 'BMX',
        location: 'Queens',
        user: 'mike'
      }, {
        _id: 1687540,
        brand: 'Mongoose',
        style: 'Mountain',
        location: 'Brooklyn',
        user: 'jim'
      }]
    }
  }
  
  renderBikes = () => {
    if (this.state.bikes) {
      return this.state.bikes.map(bike => {
        return (
          <div className = 'bike'>
            <div>{bike.brand}</div>
            <div>{bike.style}</div>
            <div>{bike.location}</div>
            <div>{bike.user}</div>
            <div className="buttons">
            <button className="danger" onClick={this.destroy}>Delete Bike</button>
            <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/users/${this.props.users}/edit`
                )
              }
            >Edit</button>
          </div>
          </div>
        )
      })
    } else {
      return null
    }
  }
  destroy = () => {
    deleteBike(this.state.bike._id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }
  render() {
    console.log(this.props.user)
      return (
    <>
          <div>{this.renderBikes()}</div>
    </>)
  }
}
export default MyBikes