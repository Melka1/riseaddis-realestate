import addSite from "./controllers/site/addSite";
import deleteSite from "./controllers/site/deleteSite";
import getSite from "./controllers/site/getSite";
import getSites from "./controllers/site/getSites";
import updateSite from "./controllers/site/updateSite";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        return getSite(req, res);
      }
      return getSites(req, res);
    case "POST":
      return addSite(req, res);
    case "PUT":
      return updateSite(req, res);
    case "DELETE":
      return deleteSite(req, res);
    default:
      return res.status(405).json({
        message: "Method not allowed",
        error: true,
      });
  }
};

export default handler;
