import React from 'react'

class MyBikes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props.user)
      return (
    <>
      <div>i am a user</div>
    </>)
  }
}
export default MyBikes