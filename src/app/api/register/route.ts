import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { name, status, year, program, platform, ticket, phone } = await request.json();
    console.log("Received Data:", { name, status, year, program, platform, ticket, phone });

    const registration = await prisma.registration.create({
      data: { name, status, year, program, platform, ticket, phone },
    });

    return NextResponse.json(registration, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: 'Failed to save registration' }, { status: 500 });
  }
}
