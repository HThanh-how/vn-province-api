import { cityData } from '../../app/database/province.tsx';


export default function handler(req, res) {
    res.status(200).json(cityData);
  }