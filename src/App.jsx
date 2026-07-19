import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Profile from './components/Profile'
function App() {
  const [darkMode,setDarkMode] = useState(true);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);
  const[user,setUser] = useState(null);
  const[repos,setRepos] = useState(null);
  async function fetchUser(username){
  try{
      setLoading(true);
      setError(null);
      const [userResponse,repoResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`)
      ]);

      if(!userResponse.ok){throw new Error('User not found')}
      const userData = await userResponse.json();
      const repoData = await repoResponse.json();
      setUser(userData);
      setRepos(repoData);
  }
  catch(e){setError(e.message);setUser(null);setRepos([])}
  finally{setLoading(false);}
  }
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SearchBar onSearch={fetchUser} loading={loading}/>
      <Profile 
      user={user} repos={repos} loading={loading} error={error}
      />
    </div>
  )
}

export default App
