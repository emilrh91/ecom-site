import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBar;
