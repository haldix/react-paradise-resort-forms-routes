import React from 'react';

const Client = ({ client }) => {
  return (
    <li className='list-item'>
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
  );
};

export default Client;
