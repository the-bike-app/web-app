import React from 'react'
import Footer from '../components/shared/Footer'

function Browse(props) {
  const showBikes = () => {
    if (props.bikes) {
      return props.bikes.map(bike => {
        return (
          <div className="item" key={bike._id}>
            <h2>{bike.brand}</h2>
            <p>{bike.type}</p>
            <p>${bike.price}</p>
            <p>{bike.location}</p>
            <img src={bike.image} alt={bike.type} />
          </div>
        )
      })
    } else {
      return null
    }
  }
  
  return (
    <>
      <div className="browse-title">
        <h1>Browse Page</h1>
        <div className='bikes-container'>
          {showBikes()}
        </div>
        <Footer />
      </div>

    </>


  )
}

export default Browse