import React, { useState } from "react";
import type { FormEvent } from "react";
import { Briefcase, Edit2, Trash2, Plus, Save } from "lucide-react";
import CommonInputField from "./CommonInputField";
import CommonEditWrapper from "./CommonEditWrapper";

interface ExperienceData {
  company: string;
  position: string;
  responsibilities: string;
  dateFrom: string;
  dateTo: string;
  id: number;
}

interface ExperienceProps {
  experience: ExperienceData[];
  onSave: (experience: ExperienceData[]) => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  experience,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(experience.length === 0);
  const [expList, setExpList] = useState(
    experience.length > 0
      ? experience
      : [
          {
            company: "",
            position: "",
            responsibilities: "",
            dateFrom: "",
            dateTo: "",
            id: Date.now(),
          },
        ]
  );

  const handleChange = (
    id: number,
    field: keyof ExperienceData,
    value: string
  ) => {
    setExpList(
      expList.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const addExperience = () => {
    setExpList([
      ...expList,
      {
        company: "",
        position: "",
        responsibilities: "",
        dateFrom: "",
        dateTo: "",
        id: Date.now(),
      },
    ]);
  };

  const removeExperience = (id: number) => {
    setExpList(expList.filter((exp) => exp.id !== id));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(expList);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <CommonEditWrapper
        title="Work Experience"
        icon={<Briefcase />}
        iconColor="text-blue-600"
        onEdit={() => setIsEditing(true)}
      >
        <div className="space-y-6">
          {expList.map((exp) => (
            <div key={exp.id} className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.position}
              </h3>
              <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">
                {exp.dateFrom} - {exp.dateTo}
              </p>
              <p className="text-gray-700">{exp.responsibilities}</p>
            </div>
          ))}
        </div>
      </CommonEditWrapper>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-green-600" />
        Work Experience
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {expList.map((exp) => (
          <div
            key={exp.id}
            className="p-4 border border-gray-200 rounded-lg relative"
          >
            {expList.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(exp.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
            <CommonInputField
              fieldName="Company Name"
              fieldValue={exp.company}
              onChange={(e) => handleChange(exp.id, "company", e.target.value)}
              placeholder="e.g. Tech Company Inc."
              type="text"
            />

            <CommonInputField
              fieldName="Position Title"
              fieldValue={exp.position}
              onChange={(e) => handleChange(exp.id, "position", e.target.value)}
              placeholder="e.g. Associate Software Engineer"
              type="text"
            />

            <CommonInputField
              fieldName="Main Responsibilities"
              fieldValue={exp.position}
              onChange={(e) =>
                handleChange(exp.id, "responsibilities", e.target.value)
              }
              placeholder="Describe your main responsibilities and achievements..."
              type="text"
            />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <CommonInputField
                  fieldName="From"
                  fieldValue={exp.position}
                  onChange={(e) =>
                    handleChange(exp.id, "dateFrom", e.target.value)
                  }
                  placeholder="e.g. Jan 2020"
                  type="text"
                />

                <CommonInputField
                  fieldName="To"
                  fieldValue={exp.position}
                  onChange={(e) =>
                    handleChange(exp.id, "dateTo", e.target.value)
                  }
                  placeholder="e.g. Present"
                  type="text"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Plus className="w-4 h-4" />
            Add Experience
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
