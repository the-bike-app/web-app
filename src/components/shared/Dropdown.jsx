import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super (props)
  }
  renderList = () => {
    console.log('rendered')
    return this.props.choices.map((choice, index) => {
      if (this.props.selected === choice) {
        return (<option value={choice} key={index} selected>{choice}</option>)
      } else {
       return (<option value={choice} key={index}>{choice}</option>)

      }
     })
  }
  render() {
    return (
      <>
      <label>{this.props.listName}</label>
      <select name= {this.props.listName} onChange={this.props.handleChange}>
        {this.renderList()}
        </select>
      </>
    )
  }
}

export default Dropdown 