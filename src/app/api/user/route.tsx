import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";
//Validation in zod
const schema = z.object({
  firstname: z.string().min(3, "Firstname must be 3 characters or more."),
  lastname: z.string().min(3, "Lastname must be 3 characters or more."),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters or more."),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, password } = schema.parse(body);
    //Check if email exists
    const isEmailExists = await db.users.findUnique({
      where: { email: email },
    });
    if (isEmailExists) {
      return NextResponse.json(
        {
          users: null,
          message:
            "User already exists! Please try using a different email address.",
        },
        { status: 409 }
      );
    }
    //Hash password
    const hashedPassword = await hash(password, 10);
    const newUser = await db.users.create({
      data: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassowrd, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created successfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", Details: error },
      { status: 500 }
    );
  }
}
