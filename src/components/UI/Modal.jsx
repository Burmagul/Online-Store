import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";

const modalRoot = document.getElementById("modal-root");

// Стили для модального окна
const modalStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
};

const contentStyles = {
  background: "#fff",
  padding: "20px 50px",
  borderRadius: "4px",
  position: "relative",
};

const ModalIcon = styled(AiFillCloseCircle)`
  font-size: 24px;
  cursor: pointer;
  color: #c74516;
  position: absolute;
  top: -25px;
  right: -25px;
`;

function Modal({ children, onClose }) {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div style={modalStyles} onDoubleClick={onClose}>
      <div style={contentStyles}>
        <ModalIcon onClick={onClose} />
        {children}
      </div>
    </div>,
    el
  );
}

export default Modal;
