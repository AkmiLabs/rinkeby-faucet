import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  console.log("Using Metamask");
  window.ethereum.enable();

  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  console.log("Using Infura");
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/fadb714efcf641c1a1640543f4793b1e"
  );
  web3 = new Web3(provider);
}

export default web3;
