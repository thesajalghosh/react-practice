import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Replace from './Replace';
import Usereducer from  './Usereduser';
import Reftut from './Reftut';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   {/* <Replace/>  */}
   {/* <Usereducer/> */}
   <Reftut/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

