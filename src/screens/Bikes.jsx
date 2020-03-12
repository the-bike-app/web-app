import React from 'react'
import Layout from '../components/shared/Layout'
import Footer from '../components/shared/Footer'

export default function Bikes(props) {
  const { history, match, user, bikes } = props
  const renderButton = id => {
    if (user) {
      return (
        <button onClick={() => history.push(`${match.url}/${id}`)}>
          See More
        </button>
      )
    } else {
      return null
    }
  }

  const renderBikes = () => {
    if (bikes) {
      return bikes.map(bike => {
        return (
          <div className="item" key={bike._id}>
            <h4>{bike.title}</h4>
            {renderButton(bike._id)}
          </div>
        )
      })
    } else {
      return null
    }
  }

  if (user) {
    return (
      <Layout>
        <h4>Bikes</h4>
        {!bikes ? <h3>No Bikes at this time.</h3> : null}
        <div className="item-container">{renderBikes()}</div>
      </Layout>
    )

  } else {
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
            <button type="submit">BUY/SELL</button>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}