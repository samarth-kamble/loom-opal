"use client";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkSpaces } from "@/lib/actions/workspace.actions";
import { NotificationProps, WorkspaceProps } from "@/types/index.type";
import Modal from "./Modal";
import { Menu, PlusCircle } from "lucide-react";
import Search from "./global/search/Search";
import { MENU_ITEMS } from "../constants/index";
import SidebarItem from "./SidebarItem";
import WorkspacePlaceholder from "./WorkspacePlaceholder";
import GlobalCard from "./GlobalCard";
import PaymentButton from "./PaymentButton";
import { getNotifications } from "@/lib/actions/user.actions";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import InfoBar from "./global/InfoBar";

import OpalLogo from "../../public/opal-logo.png";

type Props = {
  activeWorkspaceId: string;
};

const Sidebar = ({ activeWorkspaceId }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const { data, isFetched } = useQueryData(["user-workspaces"], getWorkSpaces);
  const menuItems = MENU_ITEMS(activeWorkspaceId);

  const { data: notifications } = useQueryData(
    ["user-notifications"],
    getNotifications
  );

  const { data: workspace } = data as WorkspaceProps;
  const { data: count } = notifications as NotificationProps;

  const onChangeActiveWorkspace = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  const currentWorkspace = workspace.workspace.find(
    (s) => s.id === activeWorkspaceId
  );

  const SidebarSection = (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-auto">
      <div className="bg-[#111111] p-4 flex gap-2 justify-center items-center mb-4 absolute top-0 left-0 right-0 ">
        <Image src={OpalLogo} height={40} width={40} alt="logo" />
        <p className="text-2xl font-semibold text-n-1 font-grotesk uppercase">
          Opal
        </p>
      </div>
      <Select
        defaultValue={activeWorkspaceId}
        onValueChange={onChangeActiveWorkspace}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a workspace"></SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            {workspace.workspace.map((workspace) => (
              <SelectItem value={workspace.id} key={workspace.id}>
                {workspace.name}
              </SelectItem>
            ))}
            {workspace.members.length > 0 &&
              workspace.members.map(
                (workspace) =>
                  workspace.WorkSpace && (
                    <SelectItem
                      value={workspace.WorkSpace.id}
                      key={workspace.WorkSpace.id}
                    >
                      {workspace.WorkSpace.name}
                    </SelectItem>
                  )
              )}
          </SelectGroup>
        </SelectContent>
      </Select>
      {currentWorkspace?.type === "PUBLIC" &&
        workspace.subscription?.plan == "PRO" && (
          <Modal
            trigger={
              <span className="text-sm cursor-pointer flex items-center justify-center bg-neutral-800/90  hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2">
                <PlusCircle
                  size={15}
                  className="text-neutral-800/90 fill-neutral-500"
                />
                <span className="text-neutral-400 font-semibold text-xs">
                  Invite To Workspace
                </span>
              </span>
            }
            title="Invite To Workspace"
            description="Invite other users to your workspace"
          >
            <Search workspaceId={activeWorkspaceId} />
          </Modal>
        )}
      <p className="w-full text-[#9D9D9D] font-bold mt-4">Menu</p>
      <nav className="w-full">
        <ul>
          {menuItems.map((item: any) => (
            <SidebarItem
              href={item.href}
              icon={item.icon}
              selected={pathName === item.href}
              title={item.title}
              key={item.title}
              notifications={
                (item.title === "Notifications" &&
                  count._count &&
                  count._count.notification) ||
                0
              }
            />
          ))}
        </ul>
      </nav>
      <p className="w-full text-[#9D9D9D] font-bold mt-4 ">Workspaces</p>
      {workspace.workspace.length === 1 && workspace.members.length === 0 && (
        <div className="w-full mt-[-10px]">
          <p className="text-[#3c3c3c] font-medium text-sm">
            {workspace.subscription?.plan === "FREE"
              ? "Upgrade to create workspaces"
              : "No Workspaces"}
          </p>
        </div>
      )}

      <nav className="w-full">
        <ul className="h-[150px] overflow-auto overflow-x-hidden fade-layer text-[#9D9D9D]">
          {workspace.workspace.length > 0 &&
            workspace.workspace.map(
              (item) =>
                item.type !== "PERSONAL" && (
                  <SidebarItem
                    href={`/dashboard/${item.id}`}
                    selected={pathName === `/dashboard/${item.id}`}
                    title={item.name}
                    notifications={0}
                    key={item.name}
                    icon={
                      <WorkspacePlaceholder>
                        {item.name.charAt(0)}
                      </WorkspacePlaceholder>
                    }
                  />
                )
            )}
          {workspace.members.length > 0 &&
            workspace.members.map((item) => (
              <SidebarItem
                href={`/dashboard/${item.WorkSpace.id}`}
                selected={pathName === `/dashboard/${item.WorkSpace.id}`}
                title={item.WorkSpace.name}
                notifications={0}
                key={item.WorkSpace.name}
                icon={
                  <WorkspacePlaceholder>
                    {item.WorkSpace.name.charAt(0)}
                  </WorkspacePlaceholder>
                }
              />
            ))}
        </ul>
      </nav>
      {workspace.subscription?.plan === "FREE" && (
        <GlobalCard
          title="Upgrade to Pro"
          description=" Unlock AI features like transcription, AI summary, and more."
          footer={<PaymentButton />}
        />
      )}
    </div>
  );

  return (
    <div className="full">
      <InfoBar />
      <div className="md:hidden fixed my-4">
        <Sheet>
          <SheetTrigger asChild className="ml-2">
            <Button variant={"ghost"} className="mt-[2px]">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0 w-fit h-full">
            <SheetTitle className=""></SheetTitle>
            {SidebarSection}
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden h-full">{SidebarSection}</div>
    </div>
  );
};

export default Sidebar;
