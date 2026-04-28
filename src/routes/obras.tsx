import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/obras")({
  component: () => <Outlet />,
});
