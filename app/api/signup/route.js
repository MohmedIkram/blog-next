import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    // Parse the incoming request body
    const { email, password, username } = await request.json();

    // Log the incoming data for debugging
    console.log("🚀 ~ POST ~ Received data:", { email, password, username });

    // Ensure that all fields are provided
    if (!email || !password || !username) {
      console.error("🚀 ~ POST ~ Missing fields");
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🚀 ~ POST ~ Hashed Password:", hashedPassword);

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword, // Store hashed password
        username,
      },
    });

    console.log("🚀 ~ POST ~ User created:", user);

    // Return the user object in the response
    return NextResponse.json({
      user: { id: user.id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("🚀 ~ POST ~ Error creating user:", error); // Log the actual error for debugging
    return NextResponse.json(
      { error: 'Error creating user' },
      { status: 500 }
    );
  }
}
