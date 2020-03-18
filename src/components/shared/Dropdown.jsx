import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
  }
  renderList = () => {

    return this.props.choices.map((choice, index) => {
      if (this.props.selected === choice) {
        return (
          <option
            value={choice}
            key={index}
            selected
            className='dropChoice'
          >
            {choice}
          </option>
        )
      } else {
        return (
          <option
            value={choice}
            key={index}
            className='dropChoice'
          >
            {choice}
          </option>
        )
      }
    })
  }
  render() {
    const { listName, selected } = this.props
    let blankDiv = ''
    let req = selected === 'none' ? '' : '*'

    switch (this.props.selected) {
      case 'create':
        blankDiv = (<></>)
        break;
      case 'none':
        blankDiv = (<option selected value="" className='dropChoice'>none</option>)
        break;
      default:
        blankDiv = (<option selected disabled value="" className='dropChoice'> -- select an option -- </option>)
        break;
    }
    return (

      <>
        <label>{listName.charAt(0).toUpperCase() + listName.slice(1)}{req}</label>
        <select className='dropSelect' required name={listName} onChange={this.props.handleChange}>
          {blankDiv}
          {this.renderList()}
        </select>
      </>
    )
  }
}

export default Dropdown 