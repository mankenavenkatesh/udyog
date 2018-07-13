// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

var accounts;
var account;

var addr="0xd3946517950bc600daf0f621a8b8f0a1df192650";
var abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_toId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "_fromId",
				"type": "bytes32"
			}
		],
		"name": "attested",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "addUniv",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "bytes32"
			},
			{
				"name": "_from",
				"type": "bytes32"
			}
		],
		"name": "attest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "bytes32"
			},
			{
				"name": "_from",
				"type": "bytes32"
			},
			{
				"name": "_percentage",
				"type": "uint256"
			}
		],
		"name": "recommend",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "refilTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "repo",
				"type": "uint256"
			},
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "register",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "bytes32"
			},
			{
				"name": "_to",
				"type": "bytes32"
			}
		],
		"name": "requestRecommendation",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "repo",
				"type": "uint256"
			}
		],
		"name": "updateRepo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_from",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_fromId",
				"type": "bytes32"
			}
		],
		"name": "Received",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_name",
				"type": "string"
			}
		],
		"name": "Requested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_name",
				"type": "string"
			}
		],
		"name": "Recommended",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "getRepo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var MyContract = web3.eth.contract(abi);
var instance = MyContract.at(addr);

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    instance.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];

      self.refreshRepo();
    });
  },
listenEvents: function(){


}

  register: function() {
    var name = document.getElementById("name").value;
    var repo = parseInt(document.getElementById("repo").value);
    var id = document.getElementById("id").value;
    instance.register(name,repo,id, function(error,result) {
      if(error){
        console.error(error);
      }
      else{
        console.log(result);
      }

    });
  },

  getRepo: function() {
    var _id = document.getElementById("_id").value;
    instance.getRepo(_id,function(error,result) {
      if(error){
        console.error(error);
      }
      else{
        console.log(result);
      }

    });
    },

    reqEnd: function() {
      var _to = document.getElementById("to").value;
      var _from = document.getElementById("from").value;
      instance.requestRecommendation(_id,function(error,result) {
        if(error){
          console.error(error);
        }
        else{
          console.log(result);
        }

      });
      },

      recommend: function() {
        var _to = document.getElementById("_to").value;
        var _from = document.getElementById("_from").value;
        instance.recommend(_,function(error,result) {
          if(error){
            console.error(error);
          }
          else{
            console.log(result);
          }

        });
        },

};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }

  App.start();
});
