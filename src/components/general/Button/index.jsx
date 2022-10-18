import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

function Button({ type, className, onClick, icon, children, isDisabled }) {
  return (
    <button
      type={type}
      className={`btn ${className} ${isDisabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && (
        <span className="icons-span">
          <FontAwesomeIcon icon={icon} size={'sm'} />
        </span>
      )}
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  type: 'button',
  isDisabled: false,
};

export default Button;
