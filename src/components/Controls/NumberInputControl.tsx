import React from "react";

interface NumberInputControlProps {
  label: string;
  value: number;
  min: number;
  className?: string;
  onChange: (value: number) => void;
}

const NumberInputControl: React.FC<NumberInputControlProps> = ({
  label,
  value,
  min,
  className,
  onChange,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label className="text-white">{label}</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-700 text-white"
        value={value}
        min={min}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default NumberInputControl;
