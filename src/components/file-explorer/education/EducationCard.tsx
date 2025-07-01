import { Education } from "@/types/EducationPayload";

export default function EducationCard({ education }: { education: Education }) {
  return (
    <div className="flex flex-col items-start justify-center mb-4 border-gray-200 border-b p-4 hover:bg-gray-50 rounded-2xl hover:scale-[101%] transition-all duration-300 ease-in-out cursor-default w-full">
      <div className="flex flex-row items-center justify-between w-full mb-4">
        <div className="flex flex-col items-start justify-center space-y-1">
          <h3 className="text-xl font-bold text-gray-900">
            {education.degree}
          </h3>
          <p className="text-base text-gray-600">{education.fieldOfStudy}</p>
          <p className="text-base text-gray-500">{education.university}</p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-2">
          <div className="text-sm text-gray-600">
            Graduating Class of {education.graduationYear}
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <span className="font-medium text-gray-700">CGPA:</span>
            <span className="font-semibold text-gray-900">
              {education.CGPA.toFixed(2)}
            </span>
            <span className="text-gray-400">/</span>
            <span className="font-semibold text-gray-900">
              {education.maxCGPA.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-start flex-wrap">
        {education.keyCourses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}
