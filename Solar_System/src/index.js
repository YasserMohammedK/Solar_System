import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/app";
firebase.initializeApp({

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_DATABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_DATABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_DATABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_DATABASE_APP_ID

});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
  
);

