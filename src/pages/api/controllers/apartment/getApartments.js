import { PrismaClient } from "@prisma/client";

const getApartments = async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const apartments = await prisma.apartment.findMany(); //include the models in relation later

    return res.status(200).json({
      data: apartments,
      error: false,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

export default getApartments;
