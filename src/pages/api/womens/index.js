import { getData, saveData } from "../../../../service/womens";

export default function handler(req, res) {
  if (req.method === "GET") {
    const womens = getData();
    res.status(200).json(womens);
  } else if (req.method === "POST") {
    const {name, image, price, category} = req.body;
    saveData(name, image, price, category);
    return res.status(201).json({});
  }
  res.status(404).send();
}
