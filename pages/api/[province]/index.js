// pages/api/[province]/index.js
import { cityData } from '../../../app/database/province.tsx';

export default function handler(req, res) {
    const { province } = req.query;

    // Tìm kiếm tỉnh có id tương ứng
    const provinceData = cityData.find(provinces => provinces.code === Number(province));

    if (!provinceData) {
        // Nếu không tìm thấy tỉnh, trả về lỗi
        return res.status(404).json({ error: "Provice not found" });
    }
    const districts = provinceData.districts.map(({ wards, ...district }) => district);
    // Trả về các huyện của tỉnh
    return res.status(200).json(districts);
}