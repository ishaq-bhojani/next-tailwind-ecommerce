import { getById } from "../../../../service/womens";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { womensProductId } = req.query;
    const womens = getById(womensProductId);
    return res.status(200).json(womens);
  }
  return res.status(404).send();
}
