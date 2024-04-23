import projects from "../../../abay-homes-project";

export default function handler(req, res) {
  console.log(req.body, "api requset");
  if (req.method === "POST") {
    const project = projects[req.body.id];
    return res.status(200).json(project);
  }
}
