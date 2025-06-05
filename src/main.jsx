import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.jsx'
import UsersList from './userslist.jsx'
import Dashboard from './Dashboard.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/userslist' element={<UsersList/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  ,
)
