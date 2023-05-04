/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ModalBackground, ModalContainer } from "./lib";

function Modal({ closeModal, title, children }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <div
          css={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            css={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "25px",
              cursor: "pointer",
            }}
            onClick={() => closeModal("none")}
          >
            X
          </button>
        </div>
        <div
          css={{
            display: "inline-block",
            textAlign: "center",
          }}
        >
          <h1>{title}</h1>
        </div>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
