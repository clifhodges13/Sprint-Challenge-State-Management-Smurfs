import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

function Smurf(props) {

  const handleClick = e => {
    e.preventDefault()
    props.deleteSmurf(props.smurf)
  }

  return (
    <div>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}cm</p>

      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

const mapDispatchToProps = { deleteSmurf }

export default connect(null, mapDispatchToProps)(Smurf)
