import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from 'shared/ducks/teste'

class Teste extends PureComponent {
  static initialData () {
    return loadUsers()
  }

  componentDidMount () {
    this.props.dispatch(Teste.initialData())
  }

  render () {
    const { props } = this
    return (
      <h1>Hello - {props.teste}</h1>
    )
  }
}

const mapStateToProps = state => {
  return ({
    teste: state.teste
  })
}

export default connect(mapStateToProps)(Teste)
