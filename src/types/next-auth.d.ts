import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    firstName: string;
    lastName: string;
    userUniqueId: string;
    profilePicture: string;
  }
  interface Session {
    user: User & {
      firstName: string;
      lastName: string;
      userUniqueId: string;
      profilePicture: string;
    };
    token: {
      firstName: string;
      lastName: string;
      userUniqueId: string;
      profilePicture: string;
    };
  }
}
