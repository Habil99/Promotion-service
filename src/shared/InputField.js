import React from "react";

const InputField = ({ type, label, title, required, disabled }) => {
  return (
    <div className="field-wrapper">
      <label className="form-label" htmlFor={label}>
        {title}
      </label>
      <input
        className="form-control form-input"
        type={type}
        id={label}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
