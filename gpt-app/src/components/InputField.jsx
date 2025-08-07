import React from 'react';
import '../styles/InputField.css'; 

export default function InputField({ placeholder = "Enter text...", value, onChange, onKeyDown, maxLength = 600}) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
      />
    </div>
  );
}

