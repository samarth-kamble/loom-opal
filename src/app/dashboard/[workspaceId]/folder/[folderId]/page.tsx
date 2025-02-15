import FolderInfo from "@/components/FolderInfo";
import Videos from "@/components/videos/Videos";
import {
  getAllUserVideos,
  getFolderInfo,
} from "@/lib/actions/workspace.actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  params: {
    folderId: string;
    workspaceId: string;
  };
};

const FolderId = async ({ params: { folderId, workspaceId } }: Props) => {
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["folder-videos"],
    queryFn: () => getAllUserVideos(folderId),
  });

  await query.prefetchQuery({
    queryKey: ["folder-info"],
    queryFn: () => getFolderInfo(folderId),
  });
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <FolderInfo folderId={folderId} />
      <Videos
        workspaceId={workspaceId}
        folderId={folderId}
        videosKey="folder-videos"
      />
    </HydrationBoundary>
  );
};

export default FolderId;
