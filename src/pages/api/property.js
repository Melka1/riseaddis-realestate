import { data } from "../../../data";

export default function handler(req, res) {
  console.log(req.body, "api requset");
  if (req.method === "POST") {
    const property = data[req.body.id];
    // console.log(property);
    return res.status(200).json(property);
  }
}
