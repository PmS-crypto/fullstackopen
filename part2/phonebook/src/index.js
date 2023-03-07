import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const names = [{
  id: 1,
  name: 'Arto Hellas',
  number: 9654702139
},
{
  id: 2,
  name: 'Peg',
  number: 9655702139
}]
root.render(
  <React.StrictMode>
    <App names={names} />
  </React.StrictMode>
);
