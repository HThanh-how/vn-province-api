// pages/api/[province]/index.js
import { cityData } from '../../../app/database/province.tsx';

export default function handler(req, res) {
    const { province } = req.query;

// Tìm kiếm tỉnh có id tương ứng
let provinceData = cityData.find(provinces => provinces.code === Number(province));

if (!provinceData) {
    // Nếu không tìm thấy tỉnh, trả về lỗi
    return res.status(404).json({ error: "Province not found" });
}

// Loại bỏ thông tin về xã khỏi dữ liệu huyện
provinceData = {
    ...provinceData,
    districts: provinceData.districts.map(({ wards, ...district }) => district)
};

// Trả về thông tin về tỉnh và các huyện của tỉnh
return res.status(200).json(provinceData);
}