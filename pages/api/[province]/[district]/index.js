// pages/api/[province]/[district]/index.js
import { cityData } from '../../../../app/database/province.tsx';
import cors from 'nextjs-cors';
export default async function handler(req, res) {
    
    await cors(req, res, {
        // Options
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    
    const { province, district } = req.query;

    // Tìm kiếm tỉnh có id tương ứng
    const provinceData = cityData.find(provinces => provinces.code === Number(province));

    if (!provinceData) {
        // Nếu không tìm thấy tỉnh, trả về lỗi
        return res.status(404).json({ error: 'Province not found' });
    }

    // Tìm kiếm huyện có id tương ứng
    const districtData = provinceData.districts.find(districts => districts.code === Number(district));

    if (!districtData) {
        // Nếu không tìm thấy huyện, trả về lỗi
        return res.status(404).json({ error: 'District not found' });
    }

    // Trả về thông tin về huyện
    return res.status(200).json(districtData);
}