import Link from "next/link";
import NavLink from "@/components/NavLink";
import SignOutButton from "@/components/SignOutButton";
import LoggedInUser from "@/components/LoggedInUser"; // Import the new component
import { fetchTopics } from "@/lib/data";

export default async function Sidenav() {
  const topics = await fetchTopics();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-secondary p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <span className="text-3xl font-black">Atlas</span>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLink name="About" href="/about" />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          <div className="p-2 font-bold text-gray-500">Topics</div>
          {topics.map((topic) => (
            <NavLink
              key={topic.id}
              name={topic.title}
              href={`/ui/topics/${topic.id}`}
            />
          ))}
        </div>
        <LoggedInUser />
        
        <SignOutButton />
      </div>
    </div>
  );
}
