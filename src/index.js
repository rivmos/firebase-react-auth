import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';

import App from './App';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AccountCreated from './components/AccountCreated';
import PrivateRoute from './components/PrivateRoute';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={PrivateRoute}>
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/success' Component={AccountCreated} />
          </Route>
          <Route path='/' Component={App} />
          <Route path='/signup' Component={SignUp} />
          <Route path='/signin' Component={SignIn} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
