import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super (props)
  }
  renderList = () => {
    console.log('rendered')
    console.log(this.props.selected)
    return this.props.choices.map((choice, index) => {
      if (this.props.selected === choice) {
        return (<option value={choice} key={index} selected>{choice}</option>)
      } else {
       return (<option value={choice} key={index}>{choice}</option>)

      }
     })
  }
  render() {
    let blankDiv = ''
    this.props.selected ? blankDiv = (<></>) : blankDiv = (<option disabled selected value> -- select an option -- </option>)

    return (
      <>
      <label>{this.props.listName}</label>
        <select name={this.props.listName} onChange={this.props.handleChange}>
        {blankDiv}
        {this.renderList()}
        </select>
      </>
    )
  }
}

export default Dropdown 