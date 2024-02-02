// task_1/dashboard/src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Notifications from './Notifications'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root')
)
