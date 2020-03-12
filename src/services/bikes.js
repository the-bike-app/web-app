import api from './apiConfig'

export const getBikes = async () => {
  try {
    const resp = await api.get('/bikes')
    //console.log('Data:', resp.data.bikes)
    return await resp.data.bikes
  } catch (error) {
    throw error
  }
}

export const getBikeById = async (id) => {
  try {
    const resp = await api.get(`/bikes/${id}`)
    //console.log('Data:', resp.data)
    return await resp.data.bike
  } catch (error) {
    throw error
  }
}

export const createBike = async bike => {
  try {
    const resp = await api.post('/create-bike', bike)
    console.log(resp.data)
    return resp
  } catch (error) {
    throw error
  }
}

export const updateBike = async (id, bike) => {
  try {
    const resp = await api.put(`/update-bike/${id}`, bike)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteBike = async id => {
  try {
    const resp = await api.delete(`/delete-bike/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}