import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Discussion from "@/components/Discussion";
import { fetchDiscussionData } from "@/lib/api";

export default async function DiscussionPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/signin");
  }

  const discussionData = await fetchDiscussionData();

  return (
    <div className="mt-16 container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discussion</h1>
      <Discussion data={discussionData} />
    </div>
  );
}
