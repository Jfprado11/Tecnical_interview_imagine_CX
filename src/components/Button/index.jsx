import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

function Button({ type, className, onClick, icon, children }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
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
};

export default Button;
