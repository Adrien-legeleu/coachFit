import { prisma } from "./lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.AUTH_GITHUB_ID;
const githubSecret = process.env.AUTH_GITHUB_SECRET;
if (!githubId || !githubSecret) {
  throw new Error("githubId or githubSecret re not in the environment");
}

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],

  callbacks: {
    async session({ session, user }: any) {
      session.user.id = user.id;
      console.log(session);
      return session;
    },
  },
};
