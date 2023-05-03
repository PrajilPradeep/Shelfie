import React from "react";
import "../styles/Modal-style.css";

function Modal({ closeModal, title, children }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="modalButton" onClick={() => closeModal("none")}>
            X
          </button>
        </div>
        <div className="modalTitle">
          <h1>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
