import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <Link className="pr2" to="/">All</Link>
    <Link className="pr2" to="/active">Active</Link>
    <Link className="pr2" to="/completed">Completed</Link>
  </div>
)
