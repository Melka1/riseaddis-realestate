import addApartment from "./controllers/apartment/addApartment";
import getApartment from "./controllers/apartment/getApartment";
import getApartments from "./controllers/apartment/getApartments";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      if (req.query.id || req.query.id == 0) {
        return getApartment(req, res);
      }

      return getApartments(req, res);
    case "POST":
      return addApartment(req, res);
  }
};

export default handler;
