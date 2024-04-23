import { PrismaClient } from "@prisma/client";

const addApartment = async (req, res) => {
  const { images, siteId, amenities } = req.body;

  if (!images && !siteId && (!amenities || amenities.length == 0)) {
    return res.status(400).json({
      message: "Please provide all the required fields",
      error: false,
    });
  }

  const prisma = new PrismaClient();

  try {
    const apartment = prisma.apartment.create({
      data: {
        // images,
        siteId,
        amenities,
      },
    });

    return res.status(200).json({
      message: "Apartment created successfully",
      apartment,
      error: false,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

export default addApartment;
