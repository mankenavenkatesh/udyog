import React, { Component } from 'react'
import udyog from './../../util/udyog.js'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props;
    
  }

  componentWillMount() {
    
    // udyog.addUniv(this.props.authData.networkAddress).then((response) => {
    //   console.log("add Univ callback-"+response);
    // });
  }

  render() {
    return(
      // <main className="container">
      //   <div className="pure-g">
      //     <div className="pure-u-1-1">
      //       <h1>Dashboard</h1>
      //       <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
      //     </div>
      //   </div>
      // </main>
      <div>
      <header>
        <div className="container">
          <div className="heading-wrapper">
            <div className="row">
              <div className="col-2">
              </div>
              <div className="col-2">
              </div>
              <div className="col-2" />
              <div className="col-3">
                <nav className="navbar navbar-expand-lg">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: 'unset !important'}}>
                    <ul className="nav nav-pills mr-auto justify-content-end">
                      <li className="nav-item dropdown">
                        <a className="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-bell"> Endorse</i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="head text-light bg-dark">
                            <div className="row">
                              <div className="col-lg-12 col-sm-12 col-12">
                                <span>Notifications (3)</span>
                              </div>
                            </div></li>
                          <li className="notification-box">
                            <div className="row">
                              <div className="col-lg-3 col-sm-3 col-3 text-center">
                                <img src="images/prof.jpg" className="w-50 rounded-circle" />
                              </div>    
                              <div className="col-lg-8 col-sm-8 col-8">
                                <strong className="text-info">David John</strong>
                                <div>
                                  Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <small className="text-warning">27.11.2015, 15:00</small>
                              </div>    
                            </div>
                          </li>
                          <li className="notification-box bg-gray">
                            <div className="row">
                              <div className="col-lg-3 col-sm-3 col-3 text-center">
                                <img src="images/prof.jpg" className="w-50 rounded-circle" />
                              </div>    
                              <div className="col-lg-8 col-sm-8 col-8">
                                <strong className="text-info">David John</strong>
                                <div>
                                  Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <small className="text-warning">27.11.2015, 15:00</small>
                              </div>    
                            </div>
                          </li>
                          <li className="notification-box">
                            <div className="row">
                              <div className="col-lg-3 col-sm-3 col-3 text-center">
                                <img src="images/prof.jpg" className="w-50 rounded-circle" />
                              </div>    
                              <div className="col-lg-8 col-sm-8 col-8">
                                <strong className="text-info">David John</strong>
                                <div>
                                  Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <small className="text-warning">27.11.2015, 15:00</small>
                              </div>    
                            </div>
                          </li>
                          <li className="footer bg-dark text-center">
                            {/*<a href="" class="text-light">View All</a>*/}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-3">
                <nav className="navbar navbar-expand-lg">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: 'unset !important'}}>
                    <ul className="nav nav-pills mr-auto justify-content-end">
                      <li className="nav-item dropdown">
                        <a className="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-bell"> Request</i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="head text-light bg-dark">
                            <div className="row">
                              <div className="col-lg-12 col-sm-12 col-12">
                                <span>Notifications (3)</span>
                              </div>
                            </div></li>
                          <li className="notification-box">
                            <div className="row">
                              <div className="col-lg-3 col-sm-3 col-3 text-center">
                                <img src="images/prof.jpg" className="w-50 rounded-circle" />
                              </div>    
                              <div className="col-lg-8 col-sm-8 col-8">
                                <strong className="text-info">David John</strong>
                                <div>
                                  Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <small className="text-warning">27.11.2015, 15:00</small>
                              </div>    
                            </div>
                          </li>
                          <li className="notification-box bg-gray">
                            <div className="row">
                              <div className="col-lg-3 col-sm-3 col-3 text-center">
                                <img src="images/prof.jpg" className="w-50 rounded-circle" />
                              </div>    
                              <div className="col-lg-8 col-sm-8 col-8">
                                <strong className="text-info">David John</strong>
                                <div>
                                  Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <small className="text-warning">27.11.2015, 15:00</small>
                              </div>    
                            </div>
                          </li>
                          <li className="notification-box">
                            <div className="row">
                              <div className="col-lg-3 col-sm-3 col-3 text-center">
                                <img src="images/prof.jpg" className="w-50 rounded-circle" />
                              </div>    
                              <div className="col-lg-8 col-sm-8 col-8">
                                <strong className="text-info">David John</strong>
                                <div>
                                  Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <small className="text-warning">27.11.2015, 15:00</small>
                              </div>    
                            </div>
                          </li>
                          <li className="footer bg-dark text-center">
                            {/*<a href="" class="text-light">View All</a>*/}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-lg-2" />
            <div className="col-md-10 col-lg-8">
              <div className="intro">
                <div className="profile-img"><img src="images/profile-1-250x250.jpg" alt /></div>
                <h2><b>{this.props.authData.name}</b></h2>
                <h4 className="font-yellow">Senior Software Developer</h4>
                <ul className="information margin-tb-30">
                  <li><b>Born : </b>Jan 29, 1995</li>
                  <li><b>Email : </b>mymith@mywebpage.com</li>
                  <li><b>Reputation Score : </b>234</li>
                </ul>
              </div>{/* intro */}
            </div>{/* col-sm-8 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>{/* intro-section */}
      <section className="education-section section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="heading">
                <h3><b>Education</b></h3>
                <h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
              </div>
            </div>{/* col-sm-4 */}
            <div className="col-sm-8">
              <div className="education-wrapper">
                <div className="education margin-b-50">
                  <h4><b>MASTER DEGREE IN SCIENCE</b></h4>
                  <h5 className="font-yellow"><b>BITS PILANI</b></h5>
                  <h6 className="font-lite-black margin-t-10"></h6>
                  <p className="margin-tb-30">Verified ID: {JSON.parse(this.props.authData.degreee).cid}<br />
                  Enrolment: {JSON.parse(this.props.authData.degreee).to}<br />
                  Graduation: {JSON.parse(this.props.authData.degreee).from} <br />
                  </p>
                </div>{/* education */}
                <div className="education margin-b-50">
                  <h4><b>COURSE ON COMPUTER SCIENCE</b></h4>
                  <h5 className="font-yellow"><b>NEW YORK PUBLIC UNIVERSITY</b></h5>
                  <h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2009(6 MONTHS)</h6>
                  <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                    quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                    eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                </div>{/* education */}
                <div className="education margin-b-50">
                  <h4><b>GRADUATED VALEDICTERIAN</b></h4>
                  <h5 className="font-yellow"><b>PUBLIC COLLEGE</b></h5>
                  <h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2008(4 YEARS)</h6>
                  <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                    quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                    eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                </div>{/* education */}
              </div>{/* education-wrapper */}
            </div>{/* col-sm-8 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>{/* about-section */}
      <section className="experience-section section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="heading">
                <h3><b>Work Experience</b></h3>
                <h6 className="font-lite-black"><b>PREVIOUS JOBS</b></h6>
              </div>
            </div>{/* col-sm-4 */}
            <div className="col-sm-8">
              <div className="experience margin-b-50">
                <h4><b>JUNIOR PROJECT MANAGER</b></h4>
                <h5 className="font-yellow"><b>DESIGN STUDIO</b></h5>
                <h6 className="margin-t-10">MARCH 2015 - PRESENT</h6>
                <p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                  quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                  eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                <ul className="list margin-b-30">
                  <li>Duis non volutpat arcu, eu mollis tellus.</li>
                  <li>Quis consequat nulla effi citur at.</li>
                  <li>Sed finibus aliquam neque sit.</li>
                </ul>
              </div>{/* experience */}
              <div className="experience margin-b-50">
                <h4><b>WEB MASTER/WEB DEVELOPER</b></h4>
                <h5 className="font-yellow"><b>DESIGN &amp; WEB STUDIO</b></h5>
                <h6 className="margin-t-10">APRIL 2014 - FEBRUARY 2015</h6>
                <p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                  quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                  eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                <ul className="list margin-b-30">
                  <li>Duis non volutpat arcu, eu mollis tellus.</li>
                  <li>Quis consequat nulla effi citur at.</li>
                  <li>Sed finibus aliquam neque sit.</li>
                </ul>
              </div>{/* experience */}
            </div>{/* col-sm-8 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>{/* experience-section */}
      <section className="counter-section" id="counter">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter margin-b-30">
                <h1 className="title"><b><span className="counter-value" data-duration={400} data-count={3}>0</span></b></h1>
                <h5 className="desc"><b>Coder Degrees</b></h5>
              </div>{/* counter */}
            </div>{/* col-md-3*/}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter margin-b-30">
                <h1 className="title"><b><span className="counter-value" data-duration={1400} data-count={25}>0</span></b></h1>
                <h5 className="desc"><b>Project Completed</b></h5>
              </div>{/* counter */}
            </div>{/* col-md-3*/}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter margin-b-30">
                <h1 className="title"><b><span className="counter-value" data-duration={700} data-count={311}>0</span></b></h1>
                <h5 className="desc"><b>Satisfied Clients</b></h5>
              </div>{/* counter */}
            </div>{/* col-md-3*/}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="counter margin-b-30">
                <h1 className="title"><b><span className="counter-value" data-duration={2000} data-count={732}>0</span></b></h1>
                <h5 className="desc"><b>Finished Projects</b></h5>
              </div>{/* margin-b-30 */}
            </div>{/* col-md-3*/}
          </div>{/* row*/}
        </div>{/* container*/}
      </section>{/* counter-section*/}
      <footer>
        <p className="copyright">
          Consensys India Hackathon  | Made with <i className="ion-heart" aria-hidden="true" /> by <a href="#" target="_blank">Codappa</a>
        </p>
      </footer>
    </div>
    )
  }
}

export default Dashboard
