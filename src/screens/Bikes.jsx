import React from 'react'
import Layout from '../components/shared/Layout'

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
            <div className="landing">
                <h2>Welcome to the Bikes App!</h2>
                <div className="main">
                    {!bikes ? <h3>No Bikes at this time.</h3> : null}
                    <div className="item-container">{renderBikes()}</div>
                </div>
            </div>
        )
    }
}