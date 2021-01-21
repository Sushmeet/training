import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div>
      <form>
        <label>
          Location:
          <input
            type="text"
            placeholder="Enter text here"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            // onBlur={(e) => setLocation(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
