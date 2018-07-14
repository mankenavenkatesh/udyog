import React, { Component } from 'react'
import udyog from './../../util/udyog'
import { uport } from './../../util/connectors.js'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.state = {
      "cid" : '',
      "from" : '',
      "to" : ''
    }

    this.addAttestation = this.addAttestation.bind(this);
    this.handleCidChange = this.handleCidChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);

  }

  handleCidChange(e) {
    this.setState({cid: e.target.value});
  }
  handleToChange(e) {
    this.setState({to: e.target.value});
  }
  handleFromChange(e) {
    this.setState({from: e.target.value});
  }


  addAttestation(e) {
    e.preventDefault();
    let string = JSON.stringify({ 'cid' : this.state.cid,'from': this.state.from,'to':this.state.to});
    console.log(this.props.authData);
    // udyog.attest(this.props.authData.address.toString('hex'), '2p29ciAQ1zDPLsATkFVv9XzB3pRJSPRUYH6'.toString('hex'));
    uport.attestCredentials({
      sub: this.props.authData.address,
      claim: { 'degreee': string }
    })
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
      // </main
      
        // <div>
        //   <h1>Bits Pilani Dapp</h1>
        //   <div ><form onSubmit={this.addAttestation}>
        //     <label>
        //       CID:
        //       <input type="text" value={this.state.value} onChange={this.handleCidChange} />
        //     </label>      
        //     <input type="submit" value="addAttestation" />
        //     </form>
        //    </div>
        //   </div>

        <div className="container">
        <form onSubmit={this.addAttestation}>
          <div className="form-group">
            <label htmlFor="email">CID:</label>
            <input type="text" className="form-control" id="cid" value={this.state.value} onChange={this.handleCidChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">To:</label>
            <input type="text" className="form-control" id="to" value={this.state.value} onChange={this.handleToChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">From:</label>
            <input type="text" className="form-control" id="from" value={this.state.value} onChange={this.handleFromChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    )
  }
}

export default Dashboard
