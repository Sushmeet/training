'use client';
import { useState } from 'react';

export default function FormControl() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('green');

  return (
    <>
      <form
        style={{ margin: '20px', borderRadius: '25px' }}
        className="search-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          style={{ borderRadius: '5px' }}
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button style={{ margin: '10px', color: 'blue' }}>Search!</button>
      </form>

      <p>{searchTerm}</p>

      <select
        value={selectedOption}
        onChange={(event) => {
          setSelectedOption(event.target.value);
        }}
        style={{ margin: '40px' }}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="teal">Teal</option>
      </select>

      <form>
        <fieldset></fieldset>
      </form>
    </>
  );
}
