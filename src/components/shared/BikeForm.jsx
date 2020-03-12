import React from 'react'
import Dropdown from './Dropdown'
import {brands, types, boroughs} from '../../services/constants'


const BikeForm = ({
  bike,
  handleSubmit,
  handleChange,
  handleDropdown,
  cancelPath,
  history
}) => {
  console.log(bike)
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <Dropdown
          listName="brand"
          choices={brands}
          handleChange={handleChange}
        />
        <Dropdown
          listName="type"
          choices={types}
          handleChange={handleChange}
        />
        <Dropdown
          listName="location"
          choices={boroughs}
          handleChange={handleChange}
        />
        <label>Description</label>
        <input
          placeholder='used, working'
          value={bike.description}
          name='description'
          required
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          placeholder='$200'
          value={bike.price}
          name='price'
          required
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          placeholder='/img/mountain-bike.jpg'
          value={bike.image}
          name='image'
          required
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        <button className='danger' onClick={() => history.push(cancelPath)}>
          Cancel
			</button>
      </form>
    </div>
  )
}

export default BikeForm