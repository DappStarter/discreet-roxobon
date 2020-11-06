require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind evil journey kitchen orange tackle'; 
let testAccounts = [
"0xca31e9177af6caa33acb51178a6503cd79fb4040cd0a600a6bd1d846176a4678",
"0xef21289bd14a519c6e80b30f72a80cc700e84603dd22e2dcb860f56755b6e59f",
"0x61f611395bd0c7bd3d439825f7078c19e18d276c07cd7e0887efed787b0a6157",
"0x43506b3fb9f00c2f7f04fd357b59537a4164d6ae86b6c695b0e7c17d7cf5b969",
"0xf026c40ba0ce4f0d72eeab1c9b7280d58544784f5e023875decabdb88b4a3b45",
"0xf0afb50ad4dfdb46d19338f38d78573cd978952272d2170ef1a509f38e5b8bee",
"0xb46649f200d09fc7ac848c9359b64d73608e7f4812f349096f737236a0e5ff70",
"0x86e966a7c96162582ff15721db4f415e5fe02652eb29f4debe76a382d710230d",
"0x875847eed92001886192e3aff367ea01d023c45d19a467a585489c2b6e872756",
"0x67a5e8131ee6a66846ff5ed0c14418bf00f295270b761c5e8f44c4bb68505389"
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
