import React from 'react'
import Footer from './Footer'

const Layout = (props) => (
  <div className='layout'>
    <div className='content'>
      <div className='main'>
        {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

export default Layout