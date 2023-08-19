const Web3 = require('web3'); // Import the Web3 library

async function read(){
    let { Web3 } = require("web3");
    let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"); 
    let web3 = new Web3(provider);
     //console.log(web3);

    const ABI = [
        {
            "inputs": [],
            "name": "a",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getVal",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_a",
                    "type": "uint256"
                }
            ],
            "name": "setVal",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

    const contractAddress = "0x1e7f5cDdbF8e1135b7720ebeEB00Ad4d40af8091";
    const contract = new web3.eth.Contract(ABI,contractAddress);
   // console.log(contract);

     const data = await contract.methods.getVal().call();
     console.log(data);


     
}
read();