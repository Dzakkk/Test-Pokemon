import React from "react";

const Filter = ({ types, onTypeChange }) => {
  return (
    <div className="mb-4">
      <select
        id="type-filter"
        onChange={(e) => onTypeChange(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
