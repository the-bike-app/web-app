import React from 'react';
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';



class BurgerNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;

    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }

    this.closeMenu()
  };

  render() {


    return (

     
      <div onClick={()=> this.closeMenu()}>
         <Menu noTransition right disableAutoFocus isOpen={this.state.menuOpen} customOnKeyDown={this.closeAllMenusOnEsc} 
          onStateChange={(state) => { this.handleStateChange(state) }} onClick={()=> this.closeMenu()}>
             <div className= 'menu-items' > 
              {this.props.alwaysOptions}
        {this.props.user ? this.props.authenticatedOptions : this.props.unauthenticatedOptions}
      </div>
        </Menu>
       </div>
       
     



    )
  }
}


export default BurgerNav