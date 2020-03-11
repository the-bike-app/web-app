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
        <label>Title</label>
        <input
          placeholder='A vetted bike.'
          value={bike.title}
          name='title'
          required
          onChange={handleChange}
        />

        <label>Link</label>
        <input
          placeholder='http://acoolitem.com'
          value={bike.link}
          name='link'
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