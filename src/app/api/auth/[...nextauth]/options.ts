//options to pass, could be in route.ts, but we can also do it separately
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { userAgent } from "next/server";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "ur username here",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "ur password here",
        },
      },
      async authorize(credentials) {
        //here is where you'd retrieve credentials from a databas
        const user = {
          id: "1",
          name: "test",
          email: "test@test.com",
          password: "test",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  //if you did this you would need to use your onw custom sign in page. without it
  //next-auth creates a /auth/signIn page for you!
  // pages: {
  //     signIn:"/signin"
  // }
};
