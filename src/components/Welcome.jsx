import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="welcome-hero  ">
       <h1 className="hero-title">Welcome to Clothing-Web</h1>
       <p className="hero-subtitle">Trendy. Sustainable.</p>

       <div className="hero-buttons">
        <button
          className="btn primary"
           onClick={() => {
            const element = document.getElementById("products");
              element.scrollIntoView({ behavior: "smooth" });
           }}
          >
          Shop Now
        </button>
       </div>
    </div>
  );
};

export default WelcomeSection;
