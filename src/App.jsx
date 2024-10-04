import { useState } from 'react'
import './App.css'
import Login from "./components/Login"
import Success from './components/Success';

function App() {
  return (
    <>
      <h1>Giriş Yap</h1>
      <Login />
    </>
  );
}

export default App;