const Web3 = require('web3'); // Import the Web3 library

async function connect() {
    
    let { Web3 } = require("web3");
    let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"); // connected to our blockchain
    let web3 = new Web3(provider);
    // console.log(web3);

    //to fetch the account addresses
    const accounts = await web3.eth.getAccounts();
    //console.log(accounts[0]);

     //to fetch the account Balance
     const balanceWei = await web3.eth.getBalance(accounts[1]);
     console.log(balanceWei);

     //To convert the balance to ether
     const balanceEther = web3.utils.fromWei(balanceWei,"ether");
     console.log(balanceEther); 
}

connect();
