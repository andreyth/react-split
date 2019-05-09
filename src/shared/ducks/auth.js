import axios from 'axios'

const Types = {
  SET_CURRENT_USER: 'teste/SET_CURRENT_USER'
}

const _initialState = {
  isAuthenticated: false,
  user: {}
}

export default function authReducer (state = _initialState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return { isAuthenticated: !!Object.keys(action.payload).length, user: action.payload }
    default:
      return state
  }
}

export const setCurrentUser = (user) => {
  return {
    type: Types.SET_CURRENT_USER,
    payload: user
  }
}

export const login = () => (dispatch) => {
  return axios.get('/api/login').then(res => {
    const token = res.data.token
    window.localStorage.setItem('token', token)
    dispatch(setCurrentUser(res.data))
  })
}

export const logout = () => (dispatch) => {
  window.localStorage.removeItem('token')
  dispatch(setCurrentUser({}))
}
