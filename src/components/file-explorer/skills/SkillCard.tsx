import { Skill } from "@/types/SkillPayload";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-start w-full justify-center mb-4 border-gray-200 border-b p-4 rounded-2xl transition-all duration-300 ease-in-out cursor-default">
      <div className="flex flex-row items-start justify-between w-full mb-2">
        <div className="text-xl font-semibold">{skill.domain}</div>
      </div>
      <div className="flex flex-row items-center justify-start flex-wrap gap-2">
        {skill.items.map((item, index) => {
          return (
            <div
              key={index}
              className="text-gray-700 bg-gray-100 px-2 rounded-full py-1"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
