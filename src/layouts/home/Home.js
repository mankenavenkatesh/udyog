import React, { Component } from 'react'
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'

class Home extends Component {
  render() {
    return(
         
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="images/img-01.png" alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">
                uDyog BITS Login
              </span>
              <img src="images/uport.png" style={{marginLeft: 55}} />
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  <LoginButtonContainer />
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div> 
    )
  }
}

export default Home
