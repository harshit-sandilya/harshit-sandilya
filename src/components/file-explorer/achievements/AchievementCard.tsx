import { Achievement } from "@/types/AchievementsPayload";
import Link from "next/link";
import Image from "next/image";

export default function AchievementCard({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <div className="flex flex-col items-start justify-center mb-4 border-gray-200 border-b p-4 hover:bg-gray-50 rounded-2xl hover:scale-[101%] transition-all duration-300 ease-in-out cursor-default gap-2">
      <div className="flex flex-row items-center justify-between gap-2 w-full">
        <div className="flex flex-row items-center justify-start gap-2">
          <Image
            src={
              achievement.type === "Publication"
                ? "/images/publication.png"
                : "/images/patent.png"
            }
            alt=""
            height={512}
            width={512}
            className="h-4 w-4"
          />
          <div className="text-xl font-semibold">{achievement.title}</div>
        </div>
        {achievement.github && (
          <Link href={achievement.github}>
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
      </div>
      {achievement.reference.isLink ? (
        <Link
          className="bg-gray-100 px-2 py-1 rounded-full"
          href={achievement.reference.data}
        >
          {achievement.reference.label}
        </Link>
      ) : (
        <div className="bg-gray-100 px-2 py-1 rounded-full">
          {achievement.reference.label}: {achievement.reference.data}
        </div>
      )}
      <div className="text-gray-700"> {achievement.description}</div>
    </div>
  );
}
