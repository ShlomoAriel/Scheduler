import React from 'react';
const Modal = ({ toggleModal, show, children }) => {
  return (
    <div>
    { show &&
      <section className="form-modal">
    	<button onClick={toggleModal}>close</button>
        {children}
      </section>
    }
    </div>
  );
};
export default Modal;
