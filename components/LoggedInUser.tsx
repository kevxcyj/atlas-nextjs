import { auth } from "@/auth";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function LoggedInUser() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gray-50">
      {session.user.image ? (
        <Image
          src={session.user.image}
          alt={session.user.name || "User Avatar"}
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <UserCircleIcon className="w-8 h-8 text-gray-500" />
      )}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900">
          {session.user.name}
        </span>
        <span className="text-xs text-gray-500">{session.user.email}</span>
      </div>
    </div>
  );
}
