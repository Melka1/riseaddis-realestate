import { PrismaClient } from "@prisma/client";

const getRealestates = async (req, res) => {
  const prisma = new PrismaClient();

  const realestates = await prisma.realEstate.findMany();
  console.log(realestates);
  res.status(200).json({ realestates });
};

export default getRealestates;
