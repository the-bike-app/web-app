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
    const {listName } = this.props
    let blankDiv = ''
    this.props.selected === 'create' ? blankDiv = (<></>) : blankDiv = (<option selected disabled value=""> -- select an option -- </option>)

    return (
      <>
      <label>{listName.charAt(0).toUpperCase() + listName.slice(1)}*</label>
        <select required name={listName} onChange={this.props.handleChange}>
        {blankDiv}
        {this.renderList()}
        </select>
      </>
    )
  }
}

export default Dropdown 