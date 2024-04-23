import addRealestate from "./controllers/realestate/addRealestate";
import deleteRealestate from "./controllers/realestate/deleteRealestate";
import getRealestates from "./controllers/realestate/getRealestates";
import updateRealestate from "./controllers/realestate/updateRealestate";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      return getRealestates(req, res);
    case "POST":
      return addRealestate(req, res);
    case "PUT":
      return updateRealestate(req, res);
    case "DELETE":
      return deleteRealestate(req, res);
    default:
      res.status(405).json({
        message: "Method not allowed",
        error: true,
      });
  }
};

export default handler;
