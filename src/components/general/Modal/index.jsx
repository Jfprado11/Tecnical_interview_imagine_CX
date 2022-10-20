import { createPortal } from 'react-dom';

import './style.css';

function Modal({ open, children }) {
  if (!open) return null;

  return createPortal(
    <>
      <div className="overlay" />
      <div className="modal">{children}</div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
