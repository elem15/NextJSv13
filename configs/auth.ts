import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
const users = [
  {
    id: "1",
    email: "elem@yandex.ru",
    password: "string123",
    name: "Elem",
    image: "",
  },
  {
    id: "2",
    email: "elem@google.com",
    password: "string123",
    name: "Mikhail",
    image: "",
  },
];
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = users.find((u) => u.email === credentials?.email);
        if (user && user.password === credentials?.password) {
          const { password, ...currentUser } = user;
          return currentUser as User;
        }
        return null;
      },
    }),
  ],
};
