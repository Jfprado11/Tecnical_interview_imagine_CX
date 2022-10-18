import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

function Input({ label, type, className, icon, value, setValue, inputAttributes }) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={inputAttributes.labelFor}>
        {icon && (
          <FontAwesomeIcon icon={icon} size={inputAttributes.size} className={`icon ${inputAttributes.color}`} />
        )}
        {label}
      </label>
      <input
        type={type}
        id={inputAttributes.labelFor}
        autoComplete={inputAttributes.autoComplete}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  className: '',
  inputAttributes: {
    size: 'xs',
    color: '',
    labelFor: '',
    autoComplete: 'off',
  },
};

export default Input;
