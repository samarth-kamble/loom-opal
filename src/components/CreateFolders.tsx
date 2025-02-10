"use client";

import React from "react";
import { Button } from "./ui/button";
import FolderPlusDuotine from "./icons/folder-plus-duotone";
import { useCreateFolder } from "@/hooks/useCreateFolder";

interface CreateFoldersProps {
  workspaceId: string;
}

const CreateFolders = ({ workspaceId }: CreateFoldersProps) => {
  const { onCreateNewFolder } = useCreateFolder(workspaceId);

  return (
    <Button
      className="bg-[#1d1d1d] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-xl"
      onClick={onCreateNewFolder}
    >
      <FolderPlusDuotine />
      Create Folder
    </Button>
  );
};

export default CreateFolders;
