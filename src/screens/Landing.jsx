import React from 'react'
import Bikes from './Bikes'

const Landing = (props) => (
    <div className='container landing'>
        <Bikes {...props} />
    </div>
)
export default Landing