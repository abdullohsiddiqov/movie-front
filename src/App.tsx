import React, { useEffect, useState } from 'react';
import { AllCards } from './components/allcards'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

function App() {

  return (
    <>
     <div>
      <Navbar/>
      <Header/>
      {/* <AllCards/> */}
     </div>
    </>
  );
}

export default App;