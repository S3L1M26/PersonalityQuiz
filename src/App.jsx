import { useState } from 'react'
import Header from "./components/Header.jsx"
import UserForm from './components/UserForm.jsx';
import './App.css'
import { UserProvider } from './components/UserContext.jsx';

export default function App() {

  return (
    <div>
      <Header/>
      <UserProvider>
        <UserForm/>
      </UserProvider>
    </div>
  );
}

