import React from 'react'

const BikeForm = ({
  bike,
  handleSubmit,
  handleChange,
  cancelPath,
  history
}) => (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>Brand</label>
        <input
          placeholder='Mongoose'
          value={bike.brand}
          name='brand'
          required
          onChange={handleChange}
        />

        <label>Type</label>
        <input
          placeholder='Mountain'
          value={bike.type}
          name='type'
          required
          onChange={handleChange}
        />

        <label>Type</label>
        <input
          placeholder='Manhattan'
          value={bike.location}
          name='location'
          required
          onChange={handleChange}
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

export default BikeForm