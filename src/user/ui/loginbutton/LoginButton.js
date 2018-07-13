import React from 'react'

// Images
// import uPortLogo from '../../../img/uport-logo.svg'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <div>
      <a onClick={(event) => onLoginUserClick(event)}>Login with UPort</a>
    </div>
  )
}

export default LoginButton
