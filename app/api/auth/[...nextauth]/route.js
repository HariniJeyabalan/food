import { User } from "../../../../models/User";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });

        if (!user) {
          return null; // User not found
        }

        const passwordOk = bcrypt.compareSync(password, user.password);
      
        if (passwordOk) {
          return user; // Return the user object if password is correct
        } else {
          return null; // Return null if password is incorrect
        }
      }
    })
  ]
});

export { handler as GET, handler as POST };