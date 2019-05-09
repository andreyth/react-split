import axios from 'axios'
import jwtDecode from 'jwt-decode'

import setAuthorizationToken from 'client/utils/setAuthorizationToken'

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

export const login = (data) => dispatch => {
  return axios.get('/api/login').then(res => {
    const token = res.data.token
    window.localStorage.setItem('token', token)
    setAuthorizationToken(token)
    dispatch(setCurrentUser(jwtDecode(token)))
  })
}

export const logout = () => (dispatch) => {
  window.localStorage.removeItem('token')
  setAuthorizationToken(false)
  dispatch(setCurrentUser({}))
}
