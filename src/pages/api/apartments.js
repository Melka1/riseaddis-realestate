import data from "../../../abay-homes-project";

export default function handler(req, res) {
  console.log(req.body, "api requset");
  if (req.method === "GET") {
    const property = data[0];
    console.log(property);
    return res.status(200).json(property);
  }
}
