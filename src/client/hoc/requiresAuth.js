import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const requiresAuth = (ComposedComponent) => {
  const Authenticate = (props) => {
    return (
      props.auth.isAuthenticated ? <ComposedComponent {...props} /> : <Redirect to='/login' />
    )
  }

  const mapStateToProps = state => (
    { auth: state.auth }
  )

  return connect(mapStateToProps)(Authenticate)
}

export default requiresAuth
