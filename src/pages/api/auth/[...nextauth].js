import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    jwt: {
        maxAge: 60 * 60 * 24 * 120
    },
    callbacks: {
        async signIn({ user, account, profile, credentials }) {
            const {
                provider,
                type,
                providerAccountId,
                access_token,
                token_type,
                scope,
            } = account
            const {
                name,
                email,
                image,
            } = user
            try {
                const resUser = await prisma.user.upsert({
                    where: {
                        email
                    },
                    create: {
                        username: profile.login,
                        name: name,
                        email,
                        image,
                    },
                    update: {
                        image,
                        name: name,
                    }
                })
                await prisma.account.create({
                    data: {
                        userId: resUser.id,
                        provider,
                        type,
                        providerAccountId,
                        access_token,
                        token_type,
                        scope,
                        id_token: '',
                        session_state: '',
                        refresh_token: '',
                    },
                })
            } catch (error) {
                console.log(error)
            }
            return true
        },
        async session({ session, token, user }) {
            return session
        },
        //     async jwt({ token, user, account, profile, isNewUser }) {
        //         // console.log({ token, user, account, profile, isNewUser })
        //         return token
        //     }
    }
}

export default NextAuth(authOptions)