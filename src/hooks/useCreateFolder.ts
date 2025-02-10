import { createFolder } from "@/lib/actions/workspace.actions";
import { useMutationData } from "./useMutationData";

export const useCreateFolder = (workspaceId: string) => {
  const { mutate } = useMutationData(
    ["create-folder"],
    () => createFolder(workspaceId),
    "workspace-folders"
  );

  const onCreateNewFolder = () => {
    mutate({ name: "Untitled", id: "optimistic--id" });
  };

  return { onCreateNewFolder };
};
