import { Experience } from "@/types/ExperiencePayload";
import Image from "next/image";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="flex flex-col items-start justify-center mb-4 border-gray-200 border-b p-4 hover:bg-gray-50 rounded-2xl hover:scale-[101%] transition-all duration-300 ease-in-out cursor-default w-full">
      <div className="flex flex-row items-center justify-between w-full mb-2">
        <div className="text-xl font-semibold">{experience.position}</div>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="h-6 border p-1 px-2 rounded-full border-gray-200 flex-row flex items-center justify-center gap-2">
            <Image
              src={"/images/schedule.png"}
              alt={""}
              height={512}
              width={512}
              className="h-4 w-4 object-contain"
            />{" "}
            {experience.startDate} -{" "}
            {experience.endDate ? experience.endDate : "Present"}
          </div>
          <div className="h-6 border p-1 px-2 rounded-full border-gray-200 flex-row flex items-center justify-center gap-2">
            <Image
              src={"/images/location.png"}
              alt={""}
              height={512}
              width={512}
              className="h-4 w-4 object-contain"
            />{" "}
            {experience.location}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center text-gray-600 mb-4 text-xl">
        {experience && experience.logo && experience.logo.src && (
          <Image
            src={experience.logo.src}
            alt={experience.logo.alt}
            height={experience.logo.height}
            width={experience.logo.width}
            className="h-6 w-6 object-contain rounded-full"
          />
        )}
        {experience.company}
      </div>
      <div className="mb-4">{experience.description}</div>
      <div className="flex flex-row gap-2 items-center justify-center flex-wrap">
        {experience.technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
