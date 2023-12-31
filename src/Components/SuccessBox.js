import React from "react";
import "../Styles/SuccessBox.css";
import { GlobalContext } from "../Contex/GlobalContext";
import { useContext } from "react";
function SuccessBox() {
  const { emailStatus, setEmailStatus } = useContext(GlobalContext);
  setTimeout(() => {
    document.getElementsByClassName("popup")[0].classList.add("active");
    document
      .getElementById("dismiss-popup-btn")
      .addEventListener("click", function () {
        window.location.reload();
        document.getElementsByClassName("popup")[0].classList.remove("active");
        setTimeout(() => {
          setEmailStatus(false);
          
         }, 500);
      });
  }, 500);

  return (
    <>
      <div className="popup center">
        <div className="icon">
          <i className="fa fa-check"></i>
        </div>
        <div className="title">Success!!</div>
        <div className="description">Email Sent successfully !!!</div>
        <div className="dismiss-btn">
          <button id="dismiss-popup-btn">Dismiss</button>
        </div>
      </div>
    </>
  );
}

export default SuccessBox;
