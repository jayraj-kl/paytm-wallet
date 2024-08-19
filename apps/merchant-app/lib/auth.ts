import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
    providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_URL,
    callbacks: {
      session: ({ session, token, user }:any) => {
        if (session && session) {
          session.user.id = token.userId;
        }
        console.log(session)
        return session
      }
    }
}