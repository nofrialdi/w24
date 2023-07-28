import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const getUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json(getUser);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const json = await request.json();

  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      username: json.username,
    },
  });
  return NextResponse.json(updateUser);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const json = await request.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: json,
  });

  return NextResponse.json(updatedUser);
}
