import React from "react";
import { User, Edit2, Mail, Phone } from "lucide-react";

interface CommonEditingProps {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  setIsEditing: (isEditing: boolean) => void;
}

const CommonEditing: React.FC<CommonEditingProps> = ({
  formData,
  setIsEditing,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <User className="w-6 h-6 text-blue-600" />
          Personal Information
        </h2>
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">{formData.name}</h3>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Mail className="w-5 h-5 text-blue-600" />
          <span>{formData.email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Phone className="w-5 h-5 text-blue-600" />
          <span>{formData.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default CommonEditing;
