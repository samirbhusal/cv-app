import { useState } from "react";
import { GeneralInfo } from "./GeneralInfoComponent";
import { Education } from "./EducationInfoComponent";
import { Experience } from "./ExperienceComponent";
import type {
  GeneralInfoData,
  EducationData,
  ExperienceData,
} from "../types/cv.types";

export default function CVBuilder() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoData>({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState<EducationData[]>([]);
  const [experience, setExperience] = useState<ExperienceData[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CV Builder</h1>
          <p className="text-gray-600">
            Create your professional resume with ease
          </p>
        </div>

        <GeneralInfo data={generalInfo} onSave={setGeneralInfo} />
        <Education education={education} onSave={setEducation} />
        <Experience experience={experience} onSave={setExperience} />

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">
            Your CV is automatically saved as you edit each section.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Click "Edit" on any section to make changes.
          </p>
        </div>
      </div>
    </div>
  );
}
