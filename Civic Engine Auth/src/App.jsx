import React from 'react'
import AppRouter from './components/AppRouter'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext'
import Table from "./components/Table";
import { useState, useEffect } from "react";
import EditContact from "./pages/EditContact";
import { ref, set, onValue, remove } from "firebase/database";

function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default App
