"use client";

import { SessionProvider } from "next-auth/react";

//uses useSession hook internally to retireve session
//this is a client compnoent
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
