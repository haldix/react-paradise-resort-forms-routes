import React from 'react';

const ClientList = ({ clients }) => {
  return (
    <div className='container ClientList'>
      <h2>Client Information</h2>
      <ul className='list-clients'>
        {clients.map((client) => (
          <li className='list-item' key={client.lastName}>
            <h3>
              {client.firstName} {client.lastName}
            </h3>
            <p>
              Age: {client.age} Gender: {client.gender}
            </p>
            <h4>Privleges</h4>
            {client.dining && <p>Dining</p>}
            {client.fitness && <p>Fitness Center</p>}
            {client.pool && <p>Swimming Pool</p>}
            <h4>Payment Plan</h4>
            {client.payment}
            {client.comments && (
              <>
                <h4>Comments</h4>
                <p>{client.comments}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
