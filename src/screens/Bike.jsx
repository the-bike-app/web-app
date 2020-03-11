import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getBikeById, deleteBike } from '../services/bikes'



class Bike extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bike: null,
      deleted: false
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

  destroy = () => {
    deleteBike(this.state.bike._id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render() {
    const { bike, deleted } = this.state

    if (!bike) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return (
        <Redirect
          to={{
            pathname: '/bikes',
            state: { msg: 'Bike succesfully deleted!' }
          }}
        />
      )
    }

    return (
      <Layout>
        <div className="bike">
          <Link to="/bikes">
            <span> Back to all bikes</span>
          </Link>
          <h4>{bike.title}</h4>
          <p>Link: {bike.link}</p>
          <div className="buttons">
            <button className="danger" onClick={this.destroy}>
              Delete Bike
                        </button>
            <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/bikes/${this.props.match.params.id}/edit`
                )
              }
            >
              shmeEdit
                        </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Bike