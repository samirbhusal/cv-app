import React from "react";
import { EditIcon } from "lucide-react";

// Reusable Edit Wrapper Component
interface CommonEditWrapperProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  onEdit: () => void;
  children: React.ReactNode;
}

const CommonEditWrapper: React.FC<CommonEditWrapperProps> = ({
  title,
  icon,
  iconColor,
  onEdit,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className={iconColor}>{icon}</span>
          {title}
        </h2>
        <button
          onClick={onEdit}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <EditIcon />
          Edit
        </button>
      </div>
      {children}
    </div>
  );
};
export default CommonEditWrapper;
