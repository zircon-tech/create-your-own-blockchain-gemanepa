const { Block, Blockchain } = require("./chain.js");

const JeChain = new Blockchain();
// Add a new block
JeChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));
JeChain.addBlock(new Block(Date.now().toString(), { from: "Prep", to: "Asdf", amount: 50 }));
JeChain.addBlock(new Block(Date.now().toString(), { from: "Jess", to: "Das", amount: 200 }));
// (This is just a fun example, real cryptocurrencies often have some more steps to implement).

// Prints out the updated chain
console.log('CHAIN:')
console.log(JeChain.chain); 

console.log('\nVALID:')
console.log(JeChain.isValid()); 