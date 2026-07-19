import React from 'react';
import '../Profile.css';
export default function Profile({ user, repos }){
  if (!user) return null;
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img 
          src={user.avatar_url} 
          alt={`${user.login}'s avatar`} 
          className="profile-avatar" 
        />
        <div className="profile-details">
          <h2 className="profile-name">{user.name || user.login}</h2>
          <p className="profile-bio">{user.bio || "This profile has no bio."}</p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-count">{user.public_repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-count">{user.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
          </div>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="view-profile">
                View GitHub Profile
          </a>
        </div>
      </div>

      <div className="repos-section">
        <h3>Public Repositories</h3>
        <div className="repos-grid">
          {repos && repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} className="repo-card">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
                  {repo.name}
                </a>
                <p className="repo-description">
                  {repo.description || "No description provided."}
                </p>
              </div>
            ))
          ) : (
            <p className="no-repos">No public repositories found.</p>
          )}
        </div>
      </div>
    </div>
  );
};