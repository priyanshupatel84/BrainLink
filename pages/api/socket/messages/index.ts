import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "@/types";
import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIo) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const profile = await currentProfilePages(req);
    const { content, fileUrl } = req.body;
    const { channelId, serverId } = req.query;
   

    if (!profile) return res.status(401).json({ error: "Unauthorized" });
    if (!serverId) return res.status(400).json({ error: "Server ID missing" });
    if (!channelId) return res.status(400).json({ error: "Channel ID missing" });
    if (!content) return res.status(400).json({ error: "Content missing" });

    const server = await db.server.findFirst({
      where: {
        id: serverId as string,
        members: { some: { profileId: profile.id } },
      },
      include: { members: true },
    });

    if (!server) return res.status(404).json({ message: "Server not found" });

    const channel = await db.channel.findFirst({
      where: { id: channelId as string, serverId: serverId as string },
    });

    if (!channel) return res.status(404).json({ message: "Channel not found" });

    const member = server.members.find((m) => m.profileId === profile.id);
    if (!member) return res.status(404).json({ message: "Member not found" });

    const message = await db.message.create({
      data: {
        content,
        fileUrl,
        channelId: channelId as string,
        memberId: member.id,
      },
      include: { member: { include: { profile: true } } },
    });


    const channelKey = `chat:${channelId}:messages`;
    return res.status(200).json({ channelKey, message });

  } catch (error) {
    console.error("MESSAGE_ERROR", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
