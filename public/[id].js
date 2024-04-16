// pages/api/province/[id].js
import { cityData } from '../../../app/database/province.tsx';

export default function handler(req, res) {
    const { id } = req.query;

    // Tìm kiếm tỉnh có id tương ứng
    const province = cityData.find(province => province.code === Number(id));

    if (!province) {
        // Nếu không tìm thấy tỉnh, trả về lỗi
        return res.status(404).json({ error: "Province Not Found" });
    }
    const districts = province.districts.map(({ wards, ...district }) => district);
    // Trả về các huyện của tỉnh
    return res.status(200).json(districts);
}