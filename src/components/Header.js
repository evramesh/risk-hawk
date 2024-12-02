import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Risk Hawk</h1>
      <div className="user-actions">
        <span>Process Owner HOD</span>
        <span>Admin</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
