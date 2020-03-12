import api from './apiConfig'

export const signUp = async credentials => {
  try {
    const resp = await api.post('/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signInUser = async credentials => {
  try {
    const resp = await api.post('/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signOut = async user => {
  try {
    localStorage.clear()
    return true
  } catch (error) {
    throw error
  }
}

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post('/')
    return resp.data
  } catch (error) {
    throw error
  }
}

const storeToken = (token) => {
  localStorage.setItem('token', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const verifyToken = async () => {
  const token = localStorage.getItem('token');

  if (token !== null) {
    try {
      const resp = await api.get('/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      storeToken(token);

      return resp.data.user;
    } catch (e) {
      console.log(e.message);
      console.log('invalid token');
    }
  }
}