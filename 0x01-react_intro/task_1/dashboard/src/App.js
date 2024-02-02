// task_1/dashboard/src/App.js

import React from 'react'
import './App.css'
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* ... */}
        <h1 className="App-header-text">School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </div>
    </div>
  )
}

export default App
