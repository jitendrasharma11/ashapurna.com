import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from './Headers';
import Footer from './Footer';



export default function MainLayout() {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer/>
    </div>
  );
}
