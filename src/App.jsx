import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} /> 
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
