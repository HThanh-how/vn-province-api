import { cityData } from '../../../app/database/province.tsx';

export default function handler(req, res) {
  const provinceData = cityData.map(({ districts, ...item }) => item);
  res.status(200).json(provinceData);
}