import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";
import { redirect } from "next/navigation";

import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Tutorial",
  description: "Learn NextAuth.js by Dave Gray",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ////if you wanted to ensure signin on ANY page at ALL...
  //const session = await getServerSession(options);

  //this is a callback that will take you back to the server page after you sign in
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
