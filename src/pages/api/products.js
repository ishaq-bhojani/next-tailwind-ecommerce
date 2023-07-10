// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as products from '../../../public/static/data/products.json';

export default function handler(req, res) {
  res.status(200).json(products)
}
