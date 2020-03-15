import api from './apiConfig'

export const getUserById = async (id) => {
  try {
    const resp = await api.get(`/users/${id}`)
    //console.log('Data:', resp.data)
    return await resp.data.bike
  } catch (error) {
    throw error
  }
}