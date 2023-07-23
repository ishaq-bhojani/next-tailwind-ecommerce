import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "public",
  "static",
  "data",
  "womens.json"
);

export function getData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getById(id) {
  const data = getData ();
  return data.find(p => p.id === Number(id));
}

export function saveData(name, image, price, category) {
  const data = getData();
  data.push({
    id: data.length + 1,
    name,
    image,
    price,
    category
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}
