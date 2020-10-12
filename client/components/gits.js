import React, { useState } from 'react'
import { history } from '../redux'

const Gits = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }
  return (
    <div>
      <div className="flex items-center justify-center l-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <input
            type="text"
            id="input-field"
            className="text-black"
            onChange={onChange}
            value={value}
          />
          <button type="button" id="search-button" onClick={onClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

Gits.propTypes = {}

export default React.memo(Gits)
