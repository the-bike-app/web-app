import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BikeForm from '../components/shared/BikeForm'
import Layout from '../components/shared/Layout'
import { createBike } from '../services/bikes'

class BikeCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bike: {
                title: '',
                link: ''
            },
            createdBike: null
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }

        const editedBike = Object.assign(this.state.bike, updatedField)

        this.setState({ bike: editedBike })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        const res = await createBike(this.state.bike)
        if (res.status === 201) {
            this.props.addBike(res.data)
            this.setState({ 
                createdBike: res.data 
            })
        }
    }

    render() {
        const { handleChange, handleSubmit } = this
        const { createdBike, bike } = this.state
        const { history } = this.props

        if (createdBike) {
            return <Redirect to={`/bikes`} />
        }

        return (
            <Layout>
                <BikeForm
                    bike={bike}
                    history={history}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath="/"
                />
            </Layout>
        )
    }
}

export default BikeCreate
