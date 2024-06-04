# [Vietnam Province API](https://vn-province-api.vercel.app)

## Overview

[Vietnam Province API](https://vn-province-api.vercel.app). is a RESTful API that provides a comprehensive list of provinces, districts, and wards in Vietnam. The API allows users to retrieve detailed information about each administrative division, making it useful for various applications that require geographical data of Vietnam.

## Quick Reference

| Resource | Operation | Description |
| -------- | --------- | ----------- |
| **Province** | `GET /api/province/` | Get a list of provinces |
| **District** | `GET /api/province/district/(string:province_id)` | Get a list of districts with `{province_id}` |
| **Ward** | `GET /api/province/ward/(string:district_id)` | Get a list of wards with `{district_id}` |

## Endpoints

### Get List of Provinces
This endpoint allows users to get a list of provinces in Vietnam.

**Request:**
```http
GET /api/province HTTP/1.1
Host: https://vn-province-api.vercel.app
Accept: application/json
```

**Response:**
```json
{
    "results": [
        {
            "province_id": 1,
            "province_name": "Thành phố Hà Nội",
            "province_type": "Thành phố Trung ương"
        },
        // Other provinces...
    ]
}
```

**Response Headers:**
- `Content-Type: application/json`

**Status Codes:**
- `200 OK` – Results

### Get List of Districts
This endpoint allows users to get a list of districts in Vietnam followed by `{province_id}`.

**Request:**
```http
GET /api/province/district/{province_id} HTTP/1.1
Host: https://vn-province-api.vercel.app
Accept: application/json
```

**Response:**
```json
{
    "results": [
        {
            "district_id": 271,
            "district_name": "Huyện Ba Vì"
        },
        // Other districts...
    ]
}
```

**Response Headers:**
- `Content-Type: application/json`

**Status Codes:**
- `200 OK` – Results

### Get List of Wards
This endpoint allows users to get a list of wards in Vietnam followed by `{district_id}`.

**Request:**
```http
GET /api/province/ward/{district_id} HTTP/1.1
Host: https://vn-province-api.vercel.app
Accept: application/json
```

**Response:**
```json
{
    "results": [
        {
            "ward_id": 1,
            "ward_name": "Phường Phúc Xá"
        },
        // Other wards...
    ]
}
```

**Response Headers:**
- `Content-Type: application/json`

**Status Codes:**
- `200 OK` – Results

## Example Data
### Province
```json
{
  "name": "Thành phố Hà Nội",
  "code": 1,
  "codename": "thanh_pho_ha_noi",
  "division_type": "thành phố trung ương",
  "phone_code": 24,
  "districts": [
    {
      "name": "Quận Ba Đình",
      "code": 1,
      "codename": "quan_ba_dinh",
      "division_type": "quận",
      "short_codename": "ba_dinh"
    },
    // Other districts...
  ]
}
```

### District
```json
{
  "name": "Quận Ba Đình",
  "code": 1,
  "codename": "quan_ba_dinh",
  "division_type": "quận",
  "short_codename": "ba_dinh",
  "wards": [
    {
      "name": "Phường Phúc Xá",
      "code": 1,
      "codename": "phuong_phuc_xa",
      "division_type": "phường",
      "short_codename": "phuc_xa"
    },
    // Other wards...
  ]
}
```

### Ward
```json
{
  "name": "Phường Phúc Xá",
  "code": 1,
  "codename": "phuong_phuc_xa",
  "division_type": "phường",
  "short_codename": "phuc_xa"
}
```

## Contributors

-[**Huy Thanh**](https://github.com/HThanh-how)

## Acknowledgements

Special thanks to the open-source community for providing valuable resources and support throughout the development of this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Access

You can access the live webiste of the API [here](https://vn-province-api.vercel.app).

