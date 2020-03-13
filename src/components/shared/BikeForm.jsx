import React from 'react'
import Dropdown from './Dropdown'
import { brands, types, boroughs } from '../../services/constants'


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
          selected={bike.brand}
        />
        <Dropdown
          listName="type"
          choices={types}
          handleChange={handleChange}
          bike={bike}
          selected={bike.type}
        />
        <Dropdown
          listName="location"
          choices={boroughs}
          handleChange={handleChange}
          bike={bike}
          selected={bike.location}
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
          type='file'
          placeholder='/img/mountain-bike.jpg'
          value={bike.img}
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