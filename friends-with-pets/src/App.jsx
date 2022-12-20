import React from "react";
import Header from "./Components/Header";
import FriendList from "./Components/FriendList";
import Footer from "./Components/Footer";

const App = () => {
  
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <FriendList />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;