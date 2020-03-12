import React from 'react'
import Footer from '../components/shared/Footer'


function Browse(props) {
  //this function will be used to show bikes determined if the user is signed in or not
  const showBikes = () => {
    if (props.user) {
      return (
        <h4>test signed in</h4>
      )
    } else {
      return (
        <h4>test not signed in</h4>
      )
    }
  }

  console.log(props.user)
  console.log(props.bikes)

  return (
    <>
      <div className="browse-title">
        <h1>Browse Page</h1>

        {showBikes()}
        <Footer />
      </div>

    </>


  )
}

export default Browse