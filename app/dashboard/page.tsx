import { getUser } from "@/lib/actionsUser";

import React from "react";

export default async function DashboardPage() {
  const user = await getUser();

  return <div>{user.name}</div>;
}
