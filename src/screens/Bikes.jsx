import React from 'react'
import Footer from '../components/shared/Footer'

export default function Bikes(props) {

  const toBrowse = () => {
    props.history.push('/Browse')
  }

  const toSign = () => {
    return props.history.push('/Browse')
  }

  return (
    <>
      <div className="div_image">
        <h1>WHEEL DEAL</h1>
      </div>

      <div className="div_text">

        <p className="info">
          Welcome to Wheel Deal, New York City’s digital marketplace for that two-wheel life. Browse our selection to find your next ride. Or, if you have a bike to sell, we can connect you with potential buyers in your neighborhood. Feel free to browse our selection or click Buy or Sell below to sign up. And remember, being on a bike on a rainy day is always better than being on the subway during rush hours.
        </p>

        <div className="buttons">
          <button onClick={toBrowse}>BROWSE</button>
        </div>

      </div>

      <div className="div_image2"></div>

      <div className="div_text2">

        <h2>Voted #1 Place to sell your bike by TimeOut NY for three years in a row!</h2>

        <p className="info2">
          Connecting you with thousands of bike buyers in all five boroughs. Sign up today to find your new ride or a new home for your old one.
        </p>

        <div className="buttons">
          {
            props.user ?
              (
                null
              )
              :
              (
                <button onClick={toSign}>BUY/SELL</button>
              )
          }

        </div>

      </div>

      <Footer />
    </>
  )
}