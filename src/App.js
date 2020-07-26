import React, { useState, useEffect } from 'react';
import './App.scss';
import FormDoc from './FormDoc';
import ClientList from './ClientList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';

const initClients = JSON.parse(localStorage.getItem('clients')) || [];

function App() {
  const [clients, setClients] = useState(initClients);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const handleData = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route
            exact
            path='/signup'
            render={() => <FormDoc handleData={handleData} />}
          />
          <Route
            exact
            path='/clients'
            render={() => <ClientList clients={clients} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
