import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Discussion from "@/components/Discussion";
import { fetchDiscussionData } from "@/lib/api";
import Sidebar from "@/components/Sidebar";

export default async function DiscussionPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/signin");
  }

  const discussionData = await fetchDiscussionData();

  return (
    <div className="mt-16 container mx-auto px-4 text py-8">
      <div className="flex md:space-x-7 ju">
        <Sidebar />
        <Discussion data={discussionData} />
      </div>
    </div>
  );
}
