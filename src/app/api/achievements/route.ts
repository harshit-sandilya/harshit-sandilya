import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { ErrorPayload } from "@/types/ErrorPayload";
import { AchievementsPayload } from "@/types/AchievementsPayload";
import { isNodeJSErrnoException } from "@/utils/isNodeJSErrnoException";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "achievements.json",
    );

    const fileContent = await fs.readFile(filePath, "utf-8");

    const projectData = JSON.parse(fileContent) as AchievementsPayload;

    return NextResponse.json<AchievementsPayload>(projectData, { status: 200 });
  } catch (error: unknown) {
    console.error("[API Route /api/achievements] Error fetching about:", error);

    if (isNodeJSErrnoException(error)) {
      if (error.code === "ENOENT") {
        return NextResponse.json<ErrorPayload>(
          { message: "Achievement data file not found." },
          { status: 404 },
        );
      }
      return NextResponse.json<ErrorPayload>(
        {
          message: "Failed to fetch data due to a file system error.",
          details: error.message,
        },
        { status: 500 },
      );
    } else if (error instanceof Error) {
      return NextResponse.json<ErrorPayload>(
        {
          message: "Failed to fetch achievements data.",
          details: error.message,
        },
        { status: 500 },
      );
    } else {
      return NextResponse.json<ErrorPayload>(
        { message: "An unexpected error occurred." },
        { status: 500 },
      );
    }
  }
}
