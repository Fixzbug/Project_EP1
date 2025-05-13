# 🌐 **API Documentation**

---

## 🔐 Authentication

### ▶️ `POST /auth/register`

ลงทะเบียนผู้ใช้ใหม่

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "data": {
    "id": 12,
    "email": "test@example.com"
  }
}
```

---

### ▶️ `POST /auth/login`

เข้าสู่ระบบ

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "data": {
    "token": "<JWT_TOKEN>"
  }
}
```

---

### ▶️ `GET /auth/profile`

ดึงข้อมูลผู้ใช้ที่ login อยู่

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**

```json
{
  "message": "User profile fetched",
  "data": {
    "id": 12,
    "email": "test@example.com"
  }
}
```

---

## 🔧 Device APIs

### ▶️ `GET /api/devices`

ดึงข้อมูลอุปกรณ์ทั้งหมด

**Response:**

```json
[
  {
    "id": 1,
    "device_code": "device001",
    "name": "Zone 1 - ห้องประชุม",
    "status": "online",
    "temperature": "26.90",
    "next_action": "2025-03-26T08:00:00.000Z",
    "last_active": "2025-03-26T07:30:00.000Z",
    "schedule_day": "monday",
    "round1_on": "2025-03-31T02:00:00.000Z",
    "round1_off": "2025-03-31T03:00:00.000Z",
    "round2_on": "2025-03-31T07:00:00.000Z",
    "round2_off": "2025-03-31T08:00:00.000Z"
  },
  ...
]
```

---

### ▶️ `GET /api/device/:deviceCode`

ดึงรายละเอียดอุปกรณ์แบบรายตัว

**Example:**
`GET /api/device/device001`

**Response:**

```json
{
  "id": 1,
  "device_code": "device001",
  "name": "Zone 1 - ห้องประชุม",
  "status": "online",
  "temperature": "26.90",
  "next_action": "2025-03-26T08:00:00.000Z",
  "last_active": "2025-03-26T07:30:00.000Z",
  "schedule_day": "monday",
  "round1_on": "2025-03-31T02:00:00.000Z",
  "round1_off": "2025-03-31T03:00:00.000Z",
  "round2_on": "2025-03-31T07:00:00.000Z",
  "round2_off": "2025-03-31T08:00:00.000Z"
}
```

---

### ▶️ `GET /api/device/:deviceCode/status`

ดึงข้อมูลสถานะย้อนหลังของอุปกรณ์

**Example:**
`GET /api/device/device001/status`

**Response:**

```json
[
  {
    "time": "2025-03-20T02:20:00.000Z",
    "status": "ON",
    "next_action": "Off: 12:00",
    "temperature": "20.41"
  },
  {
    "time": "2025-03-20T02:10:00.000Z",
    "status": "ON",
    "next_action": "Off: 12:00",
    "temperature": "25.83"
  }
]
```

---

## 📌 หมายเหตุ

* ทุก `POST` หรือ `GET /auth/profile` ต้องใช้ Header:

  ```
  Authorization: Bearer <JWT_TOKEN>
  ```

* เวลาเรียก `/api/...` จะไม่มีการยืนยันตัวตนในเวอร์ชันนี้ (หากต้องการเพิ่ม JWT ตรวจสอบ device route แจ้งได้)

---

ถ้าคุณต้องการ:

* สร้าง **Postman collection**
* สร้าง **Swagger/OpenAPI spec**
* ใส่ JWT ตรวจสอบใน `/api/device/...`

