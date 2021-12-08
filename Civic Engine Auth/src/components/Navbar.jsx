import {
  Box,
  HStack,
  IconButton,
  Spacer,
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import Navlink from './Navlink'
import './Navbar.css'
import { Link } from 'react-router-dom'

export function Navbar() {
  const { logout, currentUser } = useAuth()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Civic Engine
        <i className="fas fa-subway ml-2" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reset-password">
              Reset Password
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forgot-password">
              Forgot Password
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to='/logout'
              onClick={async e => {
                e.preventDefault()
                await logout()
              }}
            >Sign Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
