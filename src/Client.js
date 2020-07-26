import React from 'react';

const Client = ({ client }) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    dining,
    pool,
    fitness,
    payment,
    comments,
  } = client;
  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>
        {dining && 'dining'} {pool && 'pool'} {fitness && 'fitness'}
      </td>
      <td>{payment}</td>
      <td>{comments}</td>
    </tr>
  );
};

export default Client;
