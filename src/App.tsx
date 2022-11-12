import React from 'react';
import logo from './logo.svg';
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import { DASHBOARD_ROUTE, EXPLORE_ROUTE, HOME_ROUTE, NEW_TICKET_ROUTE } from './utils/Constants/routes_constants';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import NewTicket from './Pages/New_Ticket/New_Ticket';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={ HOME_ROUTE } element={<Home />} />
        <Route path={ DASHBOARD_ROUTE } element={<Dashboard />} />
        <Route path={ EXPLORE_ROUTE } element={<Explore />} />
        <Route path={ NEW_TICKET_ROUTE } element={<NewTicket />} />
        <Route path="*" element={<Navigate to={ HOME_ROUTE } />} />
      </Routes>
    </>
  );
}

export default App;
