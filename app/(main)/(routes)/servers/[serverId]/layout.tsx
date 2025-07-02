import { currentProfile } from "@/lib/current-profile";
import "@/styles/sidebar.css"; // Import custom CSS
import { RedirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ServerSidebar } from "@/components/server/server-sidebar";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return RedirectToSignIn({ redirectUrl: "/" });
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <div className="sidebar md:flex h-full w-60 z-20 flex-col inset-y-0 fixed">
        <ServerSidebar serverId={server.id} />
      </div>

      <div className="h-full md:pl-60" suppressHydrationWarning >{children}</div>
    </div>
  );
};

export default ServerIdLayout;
