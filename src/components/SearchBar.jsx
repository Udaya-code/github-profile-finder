import React, { useState } from 'react';
import '../searchbar.css';

export default function SearchBar({ onSearch,loading,error}){
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
        onSearch(username.trim());
    }
    };
    return (
    <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-container">
        <input
            type="text"
            className="search-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter a GitHub username..."
        />
        <button type="submit" className="search-button">
            Search
        </button>
        </div>
        {loading && <p className="loading">Loading profile...</p>}
        {error && <p>{error}</p>}
    </form>
    );
    }