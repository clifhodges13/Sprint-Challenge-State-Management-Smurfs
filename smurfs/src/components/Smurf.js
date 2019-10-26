import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

function Smurf({ smurf }) {
  return (
    <div>
      <h3>Name: {smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}cm</p>

      <button onClick={deleteSmurf}>Delete</button>
    </div>
  )
}

const mapDispatchToProps = { deleteSmurf }

export default connect(null, mapDispatchToProps)(Smurf)
