process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const {CallControl} = require('../../dist/clearvox-callcontrol.umd');

const url = 'https://192.168.1.1';
const apiKey = '';

CallControl.connect(url, apiKey).then((callControl) => {
    callControl.onChannelStart((channel) => {
        console.log('channel started', channel);

        channel.onUpdate((channel) => {
            console.log('channel updated', channel);
        });

        channel.onEnd((channel) => {
            console.log('channel ended', channel);
        });
    });
}).catch((error) => {
    console.log('Connection failed: ' + error.message);
});