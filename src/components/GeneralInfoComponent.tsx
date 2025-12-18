import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { User, UserIcon, Phone, Mail, Save } from "lucide-react";
import CommonInputField from "./CommonInputField";
import CommonEditWrapper from "./CommonEditWrapper";

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
      <CommonEditWrapper
        title="Personal Information"
        icon={<UserIcon />}
        iconColor="text-blue-600"
        onEdit={() => setIsEditing(true)}
      >
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
      </CommonEditWrapper>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <User className="w-6 h-6 text-blue-600" />
        Personal Information
      </h2>
      <form className="space-y-4">
        <CommonInputField
          fieldName="Full Name"
          fieldValue={formData.name}
          onChange={handleChange}
          placeholder="e.g. Samir Bhusal"
          type="text"
          name="name"
        />
        <CommonInputField
          fieldName="Email Address"
          fieldValue={formData.email}
          onChange={handleChange}
          placeholder="e.g. john@gmail.com"
          type="email"
          name="email"
        />

        <CommonInputField
          fieldName="Phone Number"
          fieldValue={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +1 (555) 123-4567"
          type="tel"
          name="phone"
        />
        <button
          onClick={handleSubmit}
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
