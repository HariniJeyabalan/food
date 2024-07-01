import { User } from "./../../../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  {
    const body = await req.json(); // Parse JSON body from request
    mongoose.connect(process.env.MONGO_URL); // Connect to MongoDB

    // Create user using Mongoose User model
    const pass=body.password;
    if(!pass?.length||pass.length<5){
      throw new Error('password should be at least 5 char');
    }
    const notHashedPassword=pass;
    const salt=bcrypt.genSaltSync(10);
    body.password=bcrypt.hashSync(notHashedPassword,salt);
    const createdUser=await User.create(body);
    return Response.json(createdUser);
  }
};
