import React from 'react'
import { connect } from 'react-redux'

const Message = ({message}) => (
  message ? <span className='message pa2 br2 bg-orange white mb3 dib'>{message}</span> : null
)

export default connect(
  (state) => ({message: state.message})
)(Message)
