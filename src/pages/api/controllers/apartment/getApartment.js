import { PrismaClient } from "@prisma/client";

const getApartment = async (req, res) => {
  const { id } = req.query;

  const prisma = new PrismaClient();

  try {
    const apartment = await prisma.apartment.findUnique({ where: { id } });

    if (!apartment) {
      return res.status(404).json({
        message: "Apartment not found",
        error: true,
      });
    }

    return res.status(200).json({
      data: apartment,
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

export default getApartment;
