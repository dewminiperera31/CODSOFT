// App.js
import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">Job Board</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse Jobs</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="login-btn">Log In</a>
        <a href="#" className="post-job-btn">Post A Job</a>
      </div>
    </header>
  );
}

function HeroSection() {
  const handleResumeUpload = () => {
    alert('Resume upload functionality coming soon!');
  };

  return (
    <main className="hero-section">
      <h1>4536+ Jobs listed</h1>
      <h2>Find your Dream Job</h2>
      <p>We provide online instant cash loans with quick approval that suit your term length.</p>
      <button className="upload-btn" onClick={handleResumeUpload}>Upload Your Resume</button>
    </main>
  );
}

function SearchBar() {
  return (
    <section className="search-bar">
      <div className="search-container">
        <input type="text" placeholder="Search keyword" className="search-input" />
        <input type="text" placeholder="Location" className="search-input" />
        <select className="search-input">
          <option value="">Category</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Health">Health</option>
        </select>
        <button className="find-job">Find Job</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="job-board-container">
      <Header />
      <HeroSection />
      <SearchBar />
    </div>
  );
}

export default App;

