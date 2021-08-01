import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="modal-layout">
      <div className="modal-wrapper">
        <h4 className="main-wrapper-title">Are you sure to remove ?</h4>
        <div className="d-flex justify-content-end align-items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-modal-exit"
          >
            close
          </button>
          <button className="btn btn-modal-remove">remove</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
