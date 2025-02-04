import CreateWorkspace from "@/components/CreateWorkspace";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getAllUserVideos,
  getWorkspaceFolders,
} from "@/lib/actions/workspace.actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  params: { workspaceId: string };
};

const DashboardWorkspaceIdPage = async ({ params: { workspaceId } }: Props) => {
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkspaceFolders(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getAllUserVideos(workspaceId),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div>
        <Tabs defaultValue="videos" className="mt-6">
          <div className="flex w-full justify-between items-center">
            <TabsList className="bg-transparent gap-2 pl-0">
              <TabsTrigger
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
                value="videos"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="archive"
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              >
                Archive
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-x-3">
              <CreateWorkspace />
            </div>
          </div>
        </Tabs>
      </div>
    </HydrationBoundary>
  );
};

export default DashboardWorkspaceIdPage;
