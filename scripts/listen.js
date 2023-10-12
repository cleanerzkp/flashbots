require('dotenv').config({ path: '.env' });
const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(process.env.QUICKNODE_RPC_URL, 'goerli');

async function main() {
  provider.on('block', async (blockNumber) => {
    console.log(`New block number: ${blockNumber}`);

    const block = await provider.getBlockWithTransactions(blockNumber);
    
    if (block.transactions.length > 0) {
      console.log('Transactions in this block:');
      for (const tx of block.transactions) {
        console.log(`Tx hash: ${tx.hash}`);
        console.log(`From: ${tx.from}`);
        console.log(`To: ${tx.to}`);
        console.log(`Value: ${ethers.utils.formatEther(tx.value.toString())} ETH`);
      }
    } else {
      console.log('No transactions in this block.');
    }
  });
}

main();