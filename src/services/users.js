import api from './apiConfig'

export const getUserById = async (id) => {
  try {
    const resp = await api.get(`/users/${id}`)
    return await resp.data.user
  } catch (error) {
    throw error
  }
}