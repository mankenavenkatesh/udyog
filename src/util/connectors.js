import { Connect, SimpleSigner } from 'uport-connect'

   export const uport = new Connect('Prateek Reddy\'s new app', {
      clientId: '2p29ciAQ1zDPLsATkFVv9XzB3pRJSPRUYH6',
      network: 'rinkeby',
      signer: SimpleSigner('52bd25fa30a2544a5d40815b1d8d1cb0725795f3259897e4604915404912f1db')
    })
