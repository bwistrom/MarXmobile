import React from 'react';
import './Page.css';

const Home = () => {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Welcome</h1>
      </header>
      <main className="page-content">
        <section className="section">
          <h2>Featured Content</h2>
          <div className="content-grid">
            {/* Add your content here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 