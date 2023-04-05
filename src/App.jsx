import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavLinks from "./components/NavLinks";

function App() {
  const [user, setUser] = useState({ name: "ganesh" });

  const logout = () => {
    setUser(null);
  };
  return (
    <div className="App">
      context API
      <NavLinks user={user} logout={logout} />
    </div>
  );
}

export default App;
