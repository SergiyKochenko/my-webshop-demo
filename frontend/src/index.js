import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom' // changed BrowserRouter to HashRouter
import store from './store'

import './index.css'
// eslint-disable-next-line
import './bootstrap.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Hotjar from '@hotjar/browser';

// Initialize Hotjar
const siteId = 6373343;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

// Hotjar Tracking Code for Web-Shop
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6373343,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
