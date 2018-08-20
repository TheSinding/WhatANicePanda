import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
console.log(process.env);

// if (process.env.WAN_API_URL === null || process.env.WAN_API_URL === undefined) {
//   throw new Error('What a nice api url missing!');
// }

const socket = io('https://test-wahfclmdmu.now.sh', {
  transports: ['websocket'],
  forceNew: true
});
const client = feathers();

client.configure(socketio(socket));

const sentenceService = client.service('sentences');
const aggregationService = client.service('aggregations');
const counterService = client.service('counters');
const analyzeService = client.service('analyze');
const contentTypes = {
  TEXT: 'PLAIN_TEXT'
};

export default client;

export {
  sentenceService,
  counterService,
  aggregationService,
  analyzeService,
  contentTypes
};
