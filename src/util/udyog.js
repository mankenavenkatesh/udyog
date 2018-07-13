
import contract from 'truffle-contract'
import Reputation from './../../build/contracts/Reputation.json'
// import uport from './connectors'
import { Connect, SimpleSigner } from 'uport-connect'
var mnid = require('mnid');

const  udyog= {

  contract: null,

  instance: null,

  web3 : null,
  account : null,

  init: function() {
    let self = this
    return new Promise(function (resolve, reject) {
      const uport = new Connect('Prateek Reddy\'s new app', {
          clientId: '2p29ciAQ1zDPLsATkFVv9XzB3pRJSPRUYH6',
          network: 'rinkeby',
          signer: SimpleSigner('52bd25fa30a2544a5d40815b1d8d1cb0725795f3259897e4604915404912f1db')
        })

      self.web3 = uport.getWeb3();
      self.contract = contract(Reputation)
    self.contract.setProvider(self.web3.currentProvider)  
      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve(instance)
      }).catch(err => {
        reject(err)
      })
    })
  }, 

  setAccount : function (networkAddress) {
    let self = this;
    self.account = mnid.decode(networkAddress).address;
  },

  addUniv : function () {
    let self = this;
    return self.instance.addNum(3, {from : self.account});
  }
}

export default udyog