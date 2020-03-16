import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BikeForm from '../components/shared/BikeForm'
import Layout from '../components/shared/Layout'
import { createBike } from '../services/bikes'
import axios from 'axios';

//William Is working on this - do not edit!!
class BikeCreate extends Component {
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
      createdBike: null,
      imagePath: '',
      imagePreview: ''
    }
  }

  handleUpload = (event) => {
    console.log(event.target.files[0])
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
      imagePath: path
    })
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedBike = Object.assign(this.state.bike, updatedField)
    this.setState({ bike: editedBike })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const res = await createBike(this.state.bike)
    console.log(res.status)
    if (res.status === 201) {
      console.log(res.data)
      this.props.addBike(res.data)
      this.setState({
        createdBike: res.data
      })
    }
    if (res.status === 200) {
      console.log(res.data)
      this.props.addBike(this.state.bike)
      this.setState({createdBike: this.state.bike})
    }
  }

  render() {
    const { handleChange, handleSubmit, handleUpload } = this
    const { createdBike, bike, imagePath, user } = this.state
    const { history } = this.props

    if (createdBike) {
      return <Redirect to={`/users/${user}/bikes`} />
    }
    let {imagePreview} = this.state;
    let imagePreviewDiv = null;
    if (imagePreview) {
      imagePreviewDiv = (<img src={imagePreview} />);
    }
    return (
      <Layout>
        <BikeForm
          bike={bike}
          imagePath={imagePath}
          history={history}
          handleChange={handleChange}
          handleUpload={handleUpload}
          handleSubmit={handleSubmit}
          cancelPath={`/users/${user}/bikes`}
          imagePreview={imagePreviewDiv}
        />
      </Layout>
    )
  }
}

export default BikeCreate
