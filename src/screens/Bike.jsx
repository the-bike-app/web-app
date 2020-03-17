import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getBikeById } from '../services/bikes'
import { images } from '../services/constants'
import { getUserById } from '../services/users'
import { sendOffer } from '../services/bikes'


class Bike extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bike: null,
      user: null,
      message: '',
      showForm: false
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

  handleChange = (event) => {
    console.log(event.target.value)
    const updatedState = { [event.target.name]: event.target.value }
    this.setState(updatedState)
  }

  handleOffer = () => {
    this.setState({ message: '' })
    const newState = !this.state.showForm
    this.setState({ showForm: newState })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { user, message } = this.state
    const offer = {
      sellersUsername: user.username,
      sellersEmail: user.email,
      message: message
    }
    sendOffer(offer)
    window.alert('Offer Sent Successfully!')
    this.setState({
      showForm: false,
      message: ''
    })
  }

  render() {
    const { bike, user, message, showForm } = this.state

    if (!bike || !user) {
      return <p>Loading...</p>
    }
    let bikeImg = ''
    bike.image ? bikeImg = bike.image : bikeImg = images[bike.type]
    return (
      <>
        <div className="bike">
          <Link to="/browse">
            <span className='back-btn'>&#60; Back</span>
          </Link>
          <div>Brand: {bike.brand}</div>
          <div>Type: {bike.type}</div>
          <div>Location: {bike.location}</div>
          <div>Description: {bike.description}</div>
          <div>Price: {bike.price}</div>
          <div>Picture: <img src={bikeImg} alt="bike" /></div>
          <div>Seller: {user.username}</div>
        </div>
        <button onClick={this.handleOffer}>Make An Offer</button>
        {showForm ?
          <form onSubmit={this.handleSubmit}>
            <textarea className='offer-textbox' type='text' placeholder="Add a message to the seller here" name='message' value={message} onChange={this.handleChange} maxLength='500' /><br />
            <button onClick={this.handleOffer}>Cancel</button>
            <button type='submit'>Send</button>
          </form>
          :
          ''
        }
      </>
    )
  }
}

export default Bike