import { prisma } from "@/libs/db";
import { decode } from 'next-auth/jwt';

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
    const { method } = req;
    switch (method) {
        case "GET":
            const bidAssetGet = await prisma.bidAsset.findMany();
            res.status(200).json(bidAssetGet);
            break;
        case "POST":
            const {
                imageUrl,
                name,
                description,
                openingPrice,
            } = req.body;
            await prisma.asset.create({
                data: {
                    imageUrl,
                    name,
                    description,
                    openingPrice,
                    sellerId: dataUser.id
                }
            });
            res.status(200).json({
                status: "sukses tambah bid asset"
            });
            break;
        case "DELETE":
            await prisma.bidAsset.delete({
                where: {
                    id
                }
            });
            res.status(200).json({
                status: "sukses tambah bid asset"
            });
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}