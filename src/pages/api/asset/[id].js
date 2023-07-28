import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";
import { decode } from 'next-auth/jwt';
import { useRouter } from 'next/router'

export default async function handler(req, res) {
    const sessionToken = req.cookies['next-auth.session-token'];
    const decoded = await decode({
        token: sessionToken,
        secret: process.env.NEXTAUTH_SECRET,
    });
    const dataUser = await prisma.user.findUnique({
        where: {
            email: decoded.email
        },
    });
    const { id } = req.query
    const { method } = req;
    switch (method) {
        case "GET":
            const assetsGet = await prisma.asset.findMany({
                where: {
                    id,
                    sellerId: dataUser.id
                }
            });
            res.status(200).json(assetsGet);
            break;
        case "DELETE":
            await prisma.asset.delete({
                where: {
                    id,
                    sellerId: dataUser.id
                }
            });
            res.status(200).json({
                status: "sukses delete assets"
            });
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}