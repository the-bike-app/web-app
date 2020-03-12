import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BikeForm from '../components/shared/BikeForm'
import { getBikeById, updateBike } from '../services/bikes'

class BikeEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bike: {
        user: this.props.user._id,
        brand: '',
        type: '',
        location: '',
        description: '',
        price: '',
        image: ''
      },
      user: {},
      updated: false
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

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedBike = Object.assign(this.state.bike, updatedField)

    this.setState({ bike: editedBike })
  }

  handleSubmit = event => {
    event.preventDefault()

    updateBike(this.props.match.params.id, { ...this.state.bike })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render() {
    console.log()
    const { bike, updated } = this.state
    const { handleChange, handleSubmit } = this
    const { history } = this.props

    if (updated) {
      return <Redirect to={`/bikes/${this.props.match.params.id}`} />
    }

    return (
      <>
        <div>Hello</div>
        <BikeForm
          history={history}
          bike={bike}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/bikes/${this.props.match.params.id}`}
        />
      </>
    )
  }
}
export default BikeEdit
