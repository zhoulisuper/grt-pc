import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import reportWebVitals from './reportWebVitals'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'low-code', // app name registered
    entry: '//localhost:3000/',
    container: '#root',
    activeRule: '/lowCode',
  },
  {
    name: 'vue', // app name registered
    entry: '//localhost:3007/',
    container: '#root',
    activeRule: '/vue',
  },
])

start()

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
