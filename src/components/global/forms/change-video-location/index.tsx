import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

type Props = {
  videoId: string;
  currentFolder?: string;
  currentWorkSpace?: string;
  currentFolderName?: string;
};

const ChangeVideoLocation = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkSpace,
}: Props) => {
  return (
    <form className="flex flex-col gap-y-5">
      <div className="boder-[1px] rounded-xl p-5">
        <h2 className="text-xs text-[#a4a4a4]">Current Workspace</h2>
        <p>Workspace</p>
        <h2 className="text-xs text-[#a4a4a4] mt-4">Current Folder</h2>
        <p>This video has no folder</p>
      </div>
      <Separator />
      <div className="flex flex-col gap-y-5 p-5 border-[1px] rounded-xl">
        <h2 className="text-xs text-[#a4a4a4]">To</h2>
        <Label className="flex-col gap-y-2 flex">
          <p className="text-xs">Workspace</p>
          <select className="rounded-xl text-base bg-transparent"></select>
        </Label>
      </div>
    </form>
  );
};

export default ChangeVideoLocation;
