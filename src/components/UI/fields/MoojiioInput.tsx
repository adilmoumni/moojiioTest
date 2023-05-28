import React, { ChangeEvent, useState } from "react";

interface MoojiioInputProps {
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoFocus?: boolean;
}

const MoojiioInput: React.FC<MoojiioInputProps> = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  required = false,
  disabled = false,
  maxLength,
  minLength,
  pattern,
  autoFocus = false,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="input-container my-2">
      <div className={`input-field relative`}>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoFocus={autoFocus}
          className="w-full md:w-72 px-4 py-3 border border-custom-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default MoojiioInput;
