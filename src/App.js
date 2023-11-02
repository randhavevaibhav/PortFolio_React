import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home";
import { GlobalContext } from "./Contex/GlobalContext";
import  loadingStyle from "./Styles/LodingSVG.css";
function App() {
  const [loading,setLoading] =  useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  setTimeout(() => {
    var AppDiv = document.getElementById("AppDiv");
     if(loading)
     {
      document.getElementsByClassName("App")[0].classList.add("AppL");
     }
     if(!loading){
      if (AppDiv.classList.contains("AppL"))
      {
        AppDiv.classList.remove("AppL");
      }
       
     }
    
    
  }, 500);
  
  return (
    <>
      <GlobalContext.Provider  value={{loading,setLoading,emailStatus, setEmailStatus}}>
       
        <div className="App" id="AppDiv">
          <Home />
        </div>

        {loading ? <div id="loading-svg" ></div>:<p ></p>}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
