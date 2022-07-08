import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'lowCode', // app name registered
    entry: '//localhost:3000',
    container: '#box',
    activeRule: '/lowCode',
  },
]);

start();