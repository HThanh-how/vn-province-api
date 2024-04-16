import { cityData } from '../../app/database/province.tsx';

import cors from 'nextjs-cors';
export default async function handler(req, res) {

    await cors(req, res, {
        // Options
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    res.status(200).json(cityData);
  }