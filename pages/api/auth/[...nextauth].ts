import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({ token, account }) {
      // Check if account and access_token are present
      if (account && account.access_token) {
        token.accessToken = account.access_token as string; // Explicitly cast to string
      }
      return token; // Return the modified token
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string; // Explicitly cast to string
      }
      return session; // Return the modified session
    },
  },
};

export default NextAuth(authOptions);
