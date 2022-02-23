import React from 'react';

export const Table = ({ onSort, data, sort, field, onPerson }) => (
  <table className="table">
    <thead>
      <tr>
        <th
          onClick={() => {
            onSort('id');
          }}>
          id
          {field === 'id' ? <div>{sort}</div> : null}
        </th>
        <th
          onClick={() => {
            onSort('firstName');
          }}>
          firstName
          {field === 'firstName' ? <div>{sort}</div> : null}
        </th>
        <th
          onClick={() => {
            onSort('lastName');
          }}>
          lastName
          {field === 'lastName' ? <div>{sort}</div> : null}
        </th>
        <th
          onClick={() => {
            onSort('email');
          }}>
          email
          {field === 'email' ? <div>{sort}</div> : null}
        </th>
        <th
          onClick={() => {
            onSort('phone');
          }}>
          phone
          {field === 'phone' ? <div>{sort}</div> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr onClick={() => onPerson(item)} key={item.email}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
