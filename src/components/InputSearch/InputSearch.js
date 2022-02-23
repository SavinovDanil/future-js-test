import React, { useState } from 'react';

const InputSearch = ({ onClickSearch }) => {
  const [value, setValue] = useState('');

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-group mb-3 mt-4">
      <input
        value={value}
        onChange={valueChangeHandler}
        type="text"
        className="form-control"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={() => onClickSearch(value)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
