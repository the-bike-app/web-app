import api from './apiConfig'

export const getBikes = async () => {
    try {
        const resp = await api.get('/items')
        return resp.data.items
    } catch (error) {
        throw error
    }
}

export const getBikeById = async id => {
    try {
        const resp = await api.get(`/items/${id}`)
        return resp.data.item
    } catch (error) {
        throw error
    }
}

export const createBike = async bike => {
    try {
        const resp = await api.post('/items', bike)
        console.log(resp.data)
        return resp
    } catch (error) {
        throw error
    }
}

export const updateBike = async (id, bike) => {
    try {
        const resp = await api.put(`/items/${id}`, bike)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const deleteBike = async id => {
    try {
        const resp = await api.delete(`/items/${id}`)
        return resp.data
    } catch (error) {
        throw error
    }
}