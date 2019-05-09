import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { testeLoad } from 'shared/ducks/initialData'

class Teste extends PureComponent {
  componentDidMount () {
    this.props.dispatch(testeLoad())
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
