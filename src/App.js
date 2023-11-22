import './App.css';
import { AppRoutes } from "./router/AppRoutes.js";
import React from 'react';
import { AuthProvider } from './contexts/auth';


function App() {
  return (
    <AuthProvider>
        <AppRoutes />

    </AuthProvider>
    
  );
};


export default App;
