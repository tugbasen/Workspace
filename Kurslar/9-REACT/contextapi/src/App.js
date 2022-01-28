import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import ThemeContextProvider from "./contexts.js/ThemeContext";
import AuthContextProvider from "./contexts.js/AuthContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padding text container segment">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <TodoList />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
