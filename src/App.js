import "./App.scss";
import React from "react";
import AppBar from "./components/AppBar/AppBar.js";
import BoardBar from "./components/BoardBar/BoardBar.js";
import BoardContent from "./components/BoardContent/BoardContent";

function App() {
  return (
    <div className="home-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
