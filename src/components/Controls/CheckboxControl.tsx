import React from "react";

interface CheckboxControlProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

const CheckboxControl: React.FC<CheckboxControlProps> = ({
  label,
  checked,
  onChange,
  className,
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="text-white">{label}</label>
    </div>
  );
};

export default CheckboxControl;
