import { prisma } from "@/libs/db";

export async function GET() {
  const getUsers = await prisma.user.findMany();
  console.log(getUsers);
  return new Response(JSON.stringify(getUsers));
}
