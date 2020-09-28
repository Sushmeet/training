import React from 'react';

const SearchParams = () => {
  const location = 'Seattle, WA';
  return (
    <div>
      <form>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          placeholder="Enter Location Here"
          value={location}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
