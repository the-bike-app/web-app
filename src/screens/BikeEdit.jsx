import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BikeForm from '../components/shared/BikeForm'
import { getBikeById, updateBike } from '../services/bikes'
import axios from 'axios'

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
        img: ''
      },
      imagePreview: '',
      user: {},
      updated: false,
    }
  }

  async componentDidMount() {
    try {
      const bike = await getBikeById(this.props.match.params.bikeid)
      this.setState({ bike })
      this.setState({ imagePreview: bike.image })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {

    const updatedField = { [event.target.name]: event.target.value }

    const editedBike = Object.assign(this.state.bike, updatedField)

    this.setState({ bike: editedBike })
  }
  handleUpload = (event) => {

    const image = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        imagePreview: reader.result,
      });
    }
    reader.readAsDataURL(image)

    const data = new FormData()
    data.append('file', image, image.name)
    const path = event.target.value
    const imageURL = `https://firebasestorage.googleapis.com/v0/b/cool-bike-app.appspot.com/o/${image.name}?alt=media`

    axios.post(`https://us-central1-cool-bike-app.cloudfunctions.net/uploadFile`, data)
      .then(res => {
        console.log('axios res:', res)
      })

    const updatedField = { image: imageURL }
    const editedImage = Object.assign(this.state.bike, updatedField)
    this.setState({
      bike: editedImage,
      imagePath: path,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    updateBike(this.props.match.params.bikeid, { ...this.state.bike })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render() {

    const { bike, updated } = this.state
    const { handleChange, handleSubmit } = this
    const { history } = this.props

    if (updated) {
      return <Redirect to={`/users/${this.props.user._id}/bikes`} />
    }
    let { imagePreview } = this.state;
    let imagePreviewDiv = null;
    if (imagePreview) {
      imagePreviewDiv = (<div className="imagePreview"><img src={imagePreview} /></div>);
    }

    return (
      <>
        <BikeForm
          history={history}
          bike={bike}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleUpload={this.handleUpload}
          cancelPath={`/users/${this.props.user._id}/bikes`}
          imagePreview={imagePreviewDiv}
        />
      </>
    )
  }
}

export default BikeEdit