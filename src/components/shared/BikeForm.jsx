import React from 'react'
import Dropdown from './Dropdown'
import { brands, types, boroughs } from '../../services/constants'

const BikeForm = ({
  bike,
  imagePath,
  handleSubmit,
  handleChange,
  handleUpload,
  imagePreview,
  cancelPath,
  history
}) => {

  return (

    <div className='form-container'>
      <h3>List Your Bike</h3>
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

        <label>Description*</label>
        <input
          placeholder='used, working'
          value={bike.description}
          name='description'
          required
          onChange={handleChange}
        />

        <label>Price*</label>
        <input
          placeholder='$200'
          value={bike.price}
          name='price'
          required
          onChange={handleChange}
        />

        <label>Image</label>
        {imagePreview}
        <input
          type='file'
          value={imagePath}
          name='image'
          onChange={handleUpload}
        />

        <button className='bikeFormButton' type='submit'>Submit</button>

        <button
          className='bikeFormButton'
          onClick={() => history.push(cancelPath)}>
          Cancel
        </button>
        
      </form>
    </div>
  )
}

export default BikeForm