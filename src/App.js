import "./App.css";
import { useState } from "react";
import { GlobalContext } from "./Contex/GlobalContext";

import Home from "./Pages/Home";

function App() {
  const [emailStatus, setEmailStatus] = useState(false);
  return (
    <>
      <GlobalContext.Provider  value={{emailStatus, setEmailStatus}}>

      <div className="App">
      <Home />
    </div>

      </GlobalContext.Provider>
    
    </>
    
  );
}

export default App;
