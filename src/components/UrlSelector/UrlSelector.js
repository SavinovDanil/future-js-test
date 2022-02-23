import React from 'react';

export const UrlSelector = ({ onSelect }) => {
  const smallAPI =
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const bigAPI =
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
      <button type="button" className="btn btn-primary" onClick={() => onSelect(smallAPI)}>
        32
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => onSelect(bigAPI)}>
        1000
      </button>
    </div>
  );
};
