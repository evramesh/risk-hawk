import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ContactList from "./components/Contact";
import CustomerDetails from "./components/Customer";
import Conversation from "./components/Convrsation";
import ActionLauncher from "./components/Action";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <ContactList />
          <CustomerDetails />
          <Conversation />
          <ActionLauncher />
        </div>
      </div>
    </div>
  );
};

export default App;
