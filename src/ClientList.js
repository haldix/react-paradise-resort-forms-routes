import React from 'react';
import Client from './Client';

const ClientList = ({ clients }) => {
  return (
    <div className='container ClientList'>
      <h2>Client Information</h2>
      <ul className='list-clients'>
        {clients.map((client) => (
          <Client key={client.lastName} client={client} />
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
