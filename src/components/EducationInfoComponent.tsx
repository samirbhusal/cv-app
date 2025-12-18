import React, { useState } from "react";
import type { FormEvent } from "react";
import { GraduationCap, Edit2, Trash2, Plus, Save } from "lucide-react";
import CommonInputField from "./CommonInputField";
import CommonEditWrapper from "./CommonEditWrapper";

interface EducationData {
  school: string;
  title: string;
  date: string;
  id: number;
}

interface EducationProps {
  education: EducationData[];
  onSave: (education: EducationData[]) => void;
}

export const Education: React.FC<EducationProps> = ({ education, onSave }) => {
  const [isEditing, setIsEditing] = useState(education.length === 0);
  const [eduList, setEduList] = useState(
    education.length > 0
      ? education
      : [{ school: "", title: "", date: "", id: Date.now() }]
  );

  const handleChange = (
    id: number,
    field: keyof EducationData,
    value: string
  ) => {
    setEduList(
      eduList.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const addEducation = (): void => {
    setEduList([
      ...eduList,
      { school: "", title: "", date: "", id: Date.now() },
    ]);
  };

  const removeEducation = (id: number) => {
    setEduList(eduList.filter((edu) => edu.id !== id));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(eduList);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <CommonEditWrapper
        title="Personal Information"
        icon={<GraduationCap />}
        iconColor="text-blue-600"
        onEdit={() => setIsEditing(true)}
      >
        <div className="space-y-4">
          {eduList.map((edu) => (
            <div key={edu.id} className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {edu.school}
              </h3>
              <p className="text-lg text-gray-700">{edu.title}</p>
              <p className="text-sm text-gray-500">{edu.date}</p>
            </div>
          ))}
        </div>
      </CommonEditWrapper>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 text-purple-600" />
        Education
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {eduList.map((edu, index) => (
          <div
            key={edu.id}
            className="p-4 border border-gray-200 rounded-lg relative"
          >
            {eduList.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}

            <CommonInputField
              fieldName="School Name"
              fieldValue={edu.school}
              onChange={(e) => handleChange(edu.id, "school", e.target.value)}
              placeholder="e.g. Havard University"
              type="text"
            />

            <CommonInputField
              fieldName="Degree/Title"
              fieldValue={edu.title}
              onChange={(e) => handleChange(edu.id, "title", e.target.value)}
              placeholder="e.g. Bachelor of Science in Computer Science"
              type="text"
            />

            <CommonInputField
              fieldName="Date"
              fieldValue={edu.date}
              onChange={(e) => handleChange(edu.id, "date", e.target.value)}
              placeholder="e.g. 2018 - 2022"
              type="text"
            />
          </div>
        ))}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <Plus className="w-4 h-4" />
            Add Education
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
