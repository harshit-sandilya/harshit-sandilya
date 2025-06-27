import { Project } from "@/types/ProjectPayload";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-start justify-center mb-4 border-gray-200 border-b p-4 hover:bg-gray-50 rounded-2xl hover:scale-[101%] transition-all duration-300 ease-in-out cursor-default">
      <div className="flex flex-row items-center justify-between w-full mb-2">
        <div className="text-xl font-semibold">{project.name}</div>
        <div className="flex flex-row items-center justify-center gap-2">
          {project.link && (
            <Link href={project.link}>
              <div className="h-6 border p-1 px-2 rounded-full hover:bg-white/80 border-gray-200 transition-all duration-300 ease-in-out flex-row flex items-center justify-center gap-2">
                <Image
                  src={"/images/link.png"}
                  alt={""}
                  height={512}
                  width={512}
                  className="h-4 w-4 object-contain"
                />{" "}
                Code
              </div>
            </Link>
          )}
          <div className="h-6 border p-1 px-2 rounded-full border-gray-200 flex-row flex items-center justify-center gap-2">
            <Image
              src={"/images/schedule.png"}
              alt={""}
              height={512}
              width={512}
              className="h-4 w-4 object-contain"
            />{" "}
            {project.startDate} - {project.endDate}
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{project.description}</p>
    </div>
  );
}
