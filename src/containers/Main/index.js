import React from 'react';
import Sidebar from './Sidebar';
import SelectedItem from './SelectedItem';
import './Main.css';

const Main = () => {
  return <div className='main'>
    <Sidebar />
    <SelectedItem/>
  </div>
}

export default Main;