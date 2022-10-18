import { useState, forwardRef, useImperativeHandle } from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const Snackbar = forwardRef(({ message, type, icon }, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));

  return (
    <div className={`snackbar ${type}`} id={showSnackbar ? 'show' : 'hide'}>
      <div className="snackbar__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="snackbar__message">{message}</div>
    </div>
  );
});

Snackbar.defaultProps = {
  type: 'success',
  icon: faCircleExclamation,
};

export default Snackbar;
