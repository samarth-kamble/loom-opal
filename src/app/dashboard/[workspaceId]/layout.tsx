import { onAuthenticateUser } from "@/lib/actions/user.actions";
import {
  getAllUserVideos,
  getWorkspaceFolders,
  verifyAccessToWorkspace,
} from "@/lib/actions/workspace.actions";
import { redirect } from "next/navigation";
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";

type Props = {
  params: { workspaceId: string };
  children: React.ReactNode;
};

const DashboardWorkspaceIdLayout = async ({
  params: { workspaceId },
  children,
}: Props) => {
  const auth = await onAuthenticateUser();
  if (!auth.user?.workspace) {
    redirect("/auth/sign-in");
  }
  if (!auth.user.workspace.length) {
    redirect("/auth/sign-in");
  }

  const hasAccess = await verifyAccessToWorkspace(workspaceId);

  if (hasAccess.status !== 200) {
    redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  }

  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkspaceFolders(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getAllUserVideos(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["user-notifications"],
    queryFn: () => getNotifications(),
  });

  return <div>DashboardIdPage</div>;
};

export default DashboardWorkspaceIdLayout;
