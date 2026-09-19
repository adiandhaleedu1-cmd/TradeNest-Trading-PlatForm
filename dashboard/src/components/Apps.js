import React from "react";

const Apps = () => {
  const handleExplore = () => {
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/products`;
  }
  return (
    <>
      <p>Explore our other products</p>
      <button type="button" className="logout-btn" onClick={handleExplore}>
        Explore more
      </button>
    </>
  );
};

export default Apps;
