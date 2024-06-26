// pages/api/[province]/[district]/[ward]/index.js
import { cityData } from '../../../../../app/database/province.tsx';
import cors from 'nextjs-cors';
export default async function handler(req, res) {
    await cors(req, res, {
        // Options
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    
    
    const { province, district, ward } = req.query;

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

    // Tìm kiếm xã có id tương ứng
    const wardData = districtData.wards.find(wards => wards.code === Number(ward));

    if (!wardData) {
        // Nếu không tìm thấy xã, trả về lỗi
        return res.status(404).json({ error: "Ward not found" });
    }

    // Trả về thông tin về xã
    return res.status(200).json(wardData);
}