import React from 'react'

const Modal = ({isOpen}) => {
  return (
    <section className={`h-screen w-screen banner absolute top-0 ${isOpen ? "" : "hidden"}`}>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 text-center text-white w-full">
        Modal
      </div>
    </section>
  );
}

export default Modal;