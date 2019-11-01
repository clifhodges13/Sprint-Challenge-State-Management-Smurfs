import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

function SmurfForm(props) {

  const initial = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
  }

  const [input, setInput] = useState(initial)

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addSmurf(input)
    setInput(initial)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="age"
          name="age"
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="height"
          name="height"
          onChange={handleChange}
        />
        <button type="submit">Smurfs Up Brah</button>
      </form>    
    </div>
  )
}

const mapDispatchToProps = { addSmurf }

export default connect(null, mapDispatchToProps)(SmurfForm)