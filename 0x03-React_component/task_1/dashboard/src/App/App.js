import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function App({ isLoggedIn, logOut }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'h') {
        logOut()
        alert('Logging you out')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [logOut])

  return (
    <div className="App">
      {/* Your existing component structure */}
    </div>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App
