import React from "react";

interface CommonInputFieldProps {
  fieldName: string;
  fieldValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  backgroundColor?: string;
  color?: string;
}

const CommonInputField: React.FC<CommonInputFieldProps> = ({
  fieldName,
  fieldValue,
  onChange,
  placeholder,
  backgroundColor,
  color,
  type,
  name,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
        {fieldName}
      </label>
      <input
        style={{
          background: backgroundColor || "white",
          color: color || "black",
        }}
        type={type ? type : "text"}
        name={name ? name : "name"}
        value={fieldValue}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default CommonInputField;
