import React from "react";

interface SelectControlProps {
  label: string;
  value: string | number;
  options: (string | number)[];
  onChange: (value: string | number) => void;
  className?: string;
}

const SelectControl: React.FC<SelectControlProps> = ({
  label,
  value,
  options,
  className,
  onChange,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label className="text-white">{label}</label>
      <select
        className="p-2 rounded bg-gray-700 text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectControl;
