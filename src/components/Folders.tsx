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
  // Optimistic variable

  const { data, isFetched } = useQueryData(["workspace-folders"], () =>
    getWorkspaceFolders(workspaceId)
  );
  const { latestVariables } = useMutationDataState(["create-folder"]);

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
        className={cn("flex items-center gap-4 overflow-x-auto w-full")}
      ></div>
    </div>
  );
};

export default Folders;
