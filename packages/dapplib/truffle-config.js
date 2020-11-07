require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe street rescue sad honey impulse light army gesture'; 
let testAccounts = [
"0xa7ca8eca91a15c9c397c933ac7cb791c85e2bd8e09e07c4477d2eb67992f3d4a",
"0xb0d514535b9d583602d52d0494e7746af7bebde73cf5d689a7c3fd8e2c448c99",
"0xdafd0c016aed2fe22d7c269e6349aa3f370e135e15631a0ae9b8ee14df7b9bc7",
"0x0fbbb567c329c51062ee91bad8afd841c12a6a7fe87051eeec850d34f650081d",
"0x3191d8361a89a8ff443b78e35ba4a1b54afebdd204e0623d722920d2072da800",
"0x6d15ca165cba4f63bed145f449fecb6cb441f208daf3823f33a1a0a560d57655",
"0xd48ab6a8cc3be4d186d17721c2b9ea7b5ba56c3e1f779ecb9735330d93f78bf8",
"0xaaebd11742e9aa517f1bcfcf30bd831fafcd6abf0e2956e46e9fdc73bf07e637",
"0x10efeff1f1b5b4213b221ee4ea47d9f6e8b49ff7d33de3bfcfa38a0ef5ae8585",
"0xae21b0c6c36a72ca552a49799b946bb843d1b079c16ba806f7ba06870f348707"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
