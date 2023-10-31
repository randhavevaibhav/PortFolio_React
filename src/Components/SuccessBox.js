import React from "react";
import "../Styles/SuccessBox.css";
function SuccessBox() {
  setTimeout(() => {
    document.getElementsByClassName("popup")[0].classList.add("active");
    document
      .getElementById("dismiss-popup-btn")
      .addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.remove("active");
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
