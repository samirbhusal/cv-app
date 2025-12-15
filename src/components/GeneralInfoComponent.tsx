import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { User, Mail, Phone, Edit2, Save } from "lucide-react";

interface GeneralInfoData {
  name: string;
  email: string;
  phone: string;
}

interface GeneralInfoProps {
  data: GeneralInfoData;
  onSave: (data: GeneralInfoData) => void;
}

export const GeneralInfo: React.FC<GeneralInfoProps> = ({ data, onSave }) => {
  const [isEditing, setIsEditing] = useState(!data.name);
  const [formData, setFormData] = useState(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (): void => {
    if (formData.name && formData.email && formData.phone) {
      onSave(formData);
      setIsEditing(false);
    }
  };

  if (!isEditing) {
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
            <h3 className="text-3xl font-bold text-gray-900">
              {formData.name}
            </h3>
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
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <User className="w-6 h-6 text-blue-600" />
        Personal Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label className=" text-left block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
      </form>
    </div>
  );
};
