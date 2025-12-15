import React, { useState } from "react";
import type { FormEvent } from "react";
import { Briefcase, Edit2, Trash2, Plus, Save } from "lucide-react";

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
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-green-600" />
            Work Experience
          </h2>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
        </div>
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
      </div>
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
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Company Name
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    handleChange(exp.id, "company", e.target.value)
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tech Company Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Position Title
                </label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) =>
                    handleChange(exp.id, "position", e.target.value)
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Senior Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Main Responsibilities
                </label>
                <textarea
                  value={exp.responsibilities}
                  onChange={(e) =>
                    handleChange(exp.id, "responsibilities", e.target.value)
                  }
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describe your main responsibilities and achievements..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    From
                  </label>
                  <input
                    type="text"
                    value={exp.dateFrom}
                    onChange={(e) =>
                      handleChange(exp.id, "dateFrom", e.target.value)
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Jan 2020"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    To
                  </label>
                  <input
                    type="text"
                    value={exp.dateTo}
                    onChange={(e) =>
                      handleChange(exp.id, "dateTo", e.target.value)
                    }
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Present"
                  />
                </div>
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
