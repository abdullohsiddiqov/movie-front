import React, { useEffect, useState } from 'react';
import { Header } from './components/header'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar } from './components/navbar';
function App() {

  return (
    <>
     <div>
      <Navbar/>
      <Header/>
     </div>
    </>
  );
}

export default App;