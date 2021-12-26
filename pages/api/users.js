import prisma from "../../lib/prisma"

export default async function handler(req, res) {
  const users = await prisma.user.findMany()
  res.json(users)
}
