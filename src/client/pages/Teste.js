import React from 'react'
import { connect } from 'react-redux'

const Teste = (props) => {
  return (
    <h1>Hello - {props.teste}</h1>
  )
}

const mapStateToProps = state => {
  return ({
    teste: state.teste
  })
}

export default connect(mapStateToProps)(Teste)
