import React from 'react'
import Footer from './Footer'

const Layout = (props) => (
  <div className='layout'>
    <div className='content'>
      <div className='main'>
        <h1>Wheel Deal</h1>
        {props.children}
      </div>

    </div>
    <Footer />
  </div>
)

export default Layout