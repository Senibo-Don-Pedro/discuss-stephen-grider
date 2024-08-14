"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  let data;

  data = session.data?.user;

  if (data) {
    return <div>From Client: {JSON.stringify(data)}</div>;
  }

  return <div>From client: user is NOT signed in</div>;
}
