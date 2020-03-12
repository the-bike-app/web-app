import React from 'react'
import { deleteBike } from '../services/bikes'

class MyBikes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bikes: [{
        _id: 1234567,
        brand: 'Schwinn',
        type: 'BMX',
        location: 'Queens',
        description: 'bad',
        price: '$200',
        user: 'mike'
      }, {
        _id: 1687540,
        brand: 'Mongoose',
        type: 'Mountain',
        location: 'Brooklyn',
        description: 'good',
        price: '$100',
        user: 'jim'
      }]
    }
  }

  renderBikes = () => {
    if (this.state.bikes) {
      return this.state.bikes.map(bike => {
        return (
          <div className='bike'>
            <div>{bike.brand}</div>
            <div>{bike.style}</div>
            <div>{bike.location}</div>
            <div>{bike.user}</div>
            <div className="buttons">
              <button className="danger" onClick={this.destroy}>Delete Bike</button>
              <button
                className="edit"
                onClick={(e) =>
                  this.props.history.push(
                    `/users/${this.props.user}/edit`
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
        <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/users/${this.props.users}/create`
                )
              }
            >New Bike</button>
        <div>{this.renderBikes()}</div>
      </>)
  }
}
export default MyBikes