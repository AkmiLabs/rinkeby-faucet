pragma solidity ^0.8.4;

contract Faucet {
    struct Transaction {
        uint256 timeStamp;
        address payable recepient;
        uint256 value;
    }
    address payable constant myAddress =
        payable(0x7c69c2E1d619C356125cAc15fc7302C8E864f2A7);

    Transaction[] public transactions;

    mapping(address => bool) received;

    modifier notRestricted(address payable recepient) {
        require(!received[recepient]);
        _;
    }

    function receiveEth(
        uint256 value,
        uint256 timeStamp,
        address payable recepient
    ) public payable notRestricted(recepient) {
        Transaction memory t;
        t.timeStamp = timeStamp;
        t.value = value;
        t.recepient = recepient;
        t.recepient.transfer(value);
        transactions.push(t);
    }

    function getTransactionsCount() public view returns (uint256) {
        return transactions.length;
    }

    function sendEth() public payable {
        myAddress.transfer(address(this).balance);
    }
}
