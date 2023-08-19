const Web3 = require('web3'); // Import the Web3 library

async function sendEther(){
    let { Web3 } = require("web3");
    let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"); 
    let web3 = new Web3(provider);
     //console.log(web3);

     const transact = await web3.eth.sendTransaction({
        from:"0x81171a4f3ccd144a789b1889893441b6E775Cd6E",
        to: "0x536d73393921D41272BC110D69647545041B7788",
        value:web3.utils.toWei("10","ether")
     });
     console.log(transact);
}

sendEther();