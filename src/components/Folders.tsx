"use client";

import React from "react";
import FolderDuotone from "./icons/folder-duotone";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Folder from "./Folder";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkspaceFolders } from "@/lib/actions/workspace.actions";
import { useMutationDataState } from "@/hooks/useMutationData";

interface Props {
  workspaceId: string;
}

export type FoldersProps = {
  status: number;
  data: ({
    _count: {
      videos: number;
    };
  } & {
    id: string;
    name: string;
    createdAt: Date;
    workSpaceId: string | null;
  })[];
};

const Folders = ({ workspaceId }: Props) => {
  // Get folders
  const { data, isFetched } = useQueryData(["workspace-folders"], () =>
    getWorkspaceFolders(workspaceId)
  );

  const { latestVariables } = useMutationDataState(["create-folder"]);

  const { status, data: folders } = data as FoldersProps;

  if (isFetched && folders) {
  }

  // Optimistic variable

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FolderDuotone />
          <h2 className="text-[#bdbdbd] text-xl">Folders</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#BDBDBD]">See all</p>
          <ArrowRight color="#707070" />
        </div>
      </div>
      <div
        className={cn(
          status !== 200 && "justify-center",
          "flex items-center gap-4 overflow-x-auto w-full"
        )}
      >
        {status !== 200 ? (
          <p className="text-neutral-300">No Folders in Workspace</p>
        ) : (
          <>
            {latestVariables && latestVariables.status === "pending" && (
              <Folder
                name={latestVariables.variables.name}
                id={latestVariables.variables.id}
              />
            )}
            {folders.map((folder) => (
              <Folder
                key={folder.id}
                name={folder.name}
                id={folder.id}
                count={folder._count.videos}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Folders;
