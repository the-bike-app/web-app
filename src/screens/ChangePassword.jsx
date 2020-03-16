import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../services/auth'
// import messages from './AutoDismissAlert/messages'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class ChangePassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onChangePassword = event => {
    event.preventDefault()
    const { history, user } = this.props
    const id = user._id
    const credentials = { ...this.state, id }
    changePassword(credentials)
      .then(() => {
        history.push('/users/:id/bikes')
        window.alert('Your password was successfully changed!')
      })
      .catch((error) => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        window.alert('Incorrect Old Password, Your password was not changed.')
      })
  }

  render() {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="row change-password">
        <h3>Change Password</h3>
        <form onSubmit={this.onChangePassword}>
          <label>Old password</label>
          <input
            required
            name="oldPassword"
            value={oldPassword}
            type="password"
            placeholder="Old Password"
            onChange={this.handleChange}
          />
          <label>New Password</label>
          <input
            required
            name="newPassword"
            value={newPassword}
            type="password"
            placeholder="New Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ChangePassword)