import React, { useState } from "react";


const SearchParams = () => {
  const [location, setLocation] = useState("Enter text here");
  return (
    <div>
      <form>
        <label>
          Location:
          <input type="text" placeholder="Enter text here" value={location} />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
