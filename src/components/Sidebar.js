import React from "react";

const Sidebar = () => {
  const menuItems = [
    "Internal Audit",
    "UAT Testing",
    "Intract",
    "Queue",
    "Workflow",
    "Admin",
    "Asset",
    "Parent",
    "Option One",
    "Option Two",
    "All Accessories",
    "Internal Audit",
    "Decorating",
    "Presenting",
  ];

  return (
    <div className="sidebar">
      <h2>Risk Hawk</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
