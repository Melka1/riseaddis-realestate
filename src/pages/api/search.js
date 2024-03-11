import { data } from "../../../data";

export default function handler(req, res) {
  console.log(req.body, "api requset");
  if (req.method === "GET") {
    const property = data;
    console.log(property);
    res.status(200).json(property);
  }
}
