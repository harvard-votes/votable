import { React, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import EditContact from '../pages/EditContact'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import TestPage from '../pages/TestPage'
import { ref, set, onValue, remove } from "firebase/database";
import db from "../utils/init-firebase";

export default function AppRouter(props) {
  const [contacts, setContacts] = useState([]);

  // Read Contacts
  useEffect(() => {
    onValue(ref(db, "contacts"), (snapshot) => {
      setContacts(snapshot.val() != null ? snapshot.val() : []);
    });
  }, []);

  // Save Contact
  const saveContact = (contact) => {
    set(ref(db, "contacts/" + contact.id), contact)
      .then(() => {
        console.log("Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Contact
  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      remove(ref(db, "contacts/" + id))
        .then(() => {
          console.log("Success!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {/* <Router>
        <Routes>
          <Route exact path='/' element={Homepage} />
          <ProtectedRoute exact path='/login' element={Loginpage} />
          <ProtectedRoute exact path='/register' element={Registerpage} />
          <ProtectedRoute exact path='/profile' element={Profilepage} />
          <ProtectedRoute exact path='/test' element={TestPage} />
          <ProtectedRoute
            exact
            path='/forgot-password'
            element={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path='/reset-password'
            element={ResetPasswordPage}
          />
          <Route exact path='*' element={NotfoundPage} />
        </Routes>
      </Router> */}

      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage contacts={contacts} onDelete={deleteContact} />} />
          <Route exact path='/login' element={<ProtectedRoute />}>
            <Route exact path='/login' element={<Loginpage />} />
          </Route>
          <Route exact path='/register' element={<ProtectedRoute />}>
            <Route exact path='/register' element={<Registerpage />} />
          </Route>
          <Route exact path='/forgot-password' element={<ProtectedRoute />}>
            <Route exact path='/forgot-password' element={<ForgotPasswordPage />} />
          </Route>
          <Route exact path='/reset-password' element={<ProtectedRoute />}>
            <Route exact path='/reset-password' element={<ResetPasswordPage />} />
          </Route>
          <Route
            path="/edit-contact"
            element={<EditContact onSave={saveContact} />}
          />
          <Route exact path='*' element={<NotfoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUser ? (
      <Navigate to={location.state?.from ?? '/profile'} />
    ) : (
        <Route {...props} />
      )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
      <Navigate
        to={{
          pathname: '/login',
          state: { from: path },
        }}
      />
    )
}
