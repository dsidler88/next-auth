import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "../components/UserCard";
import { redirect } from "next/navigation";

//in server page, you still await serverSession... but instead you just redirect if there is no session
export default async function ServerPage() {
  //getServerSession is a server component function that will take the options and return the session.
  const session = await getServerSession(options);

  //this is a callback that will take you back to the server page after you sign in
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Server"} />
      <div>{JSON.stringify(session)}</div>
    </section>
  );
}
