import Link from "next/link";
import Image from "next/image";

export default function TaskBar() {
  return (
    <div className="absolute left-0 top-0 z-20 h-screen flex justify-center items-center w-20">
      <div className="flex flex-col items-center space-y-4 py-2 px-4 rounded-xl bg-black/40 backdrop-blur-sm">
        <Link href={"/file-explorer"}>
          <Image
            src={"/folder.png"}
            alt="File Explorer"
            height={512}
            width={512}
            className="h-10 w-10 hover:scale-110 transition-transform duration-200"
          />
        </Link>
        <Link href={"/terminal"}>
          <Image
            src={"/terminal.png"}
            alt="Terminal"
            height={512}
            width={512}
            className="h-10 w-10 hover:scale-110 transition-transform duration-200"
          />
        </Link>
        <Link href={"/note"}>
          <Image
            src={"/note.png"}
            alt="Note"
            height={512}
            width={512}
            className="h-10 w-10 hover:scale-110 transition-transform duration-200"
          />
        </Link>
        <Link href={"/settings"}>
          <Image
            src={"/settings.png"}
            alt="Settings"
            height={512}
            width={512}
            className="h-10 w-10 hover:scale-110 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
