import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./components/styles/index.scss";
import Routes from "./routes/index";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Routes />);


