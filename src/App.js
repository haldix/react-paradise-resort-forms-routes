import React, { useState } from 'react';
import './App.css';
import FormDoc from './FormDoc';
import ClientList from './ClientList';

function App() {
  const [clients, setClients] = useState([]);

  const handleData = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div className='App'>
      <FormDoc handleData={handleData} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
