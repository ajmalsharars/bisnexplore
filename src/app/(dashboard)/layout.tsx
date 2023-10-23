import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/signin");
  return <>{children}</>;
}
