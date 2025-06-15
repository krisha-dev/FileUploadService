
# File Upload Service

A simple image upload API built using **Node.js**, **Express**, **Multer**, and **MongoDB**. It allows users to upload images to a local folder and stores file metadata in MongoDB. Images are publicly accessible via URL.

---

## Features

- Upload image files via `POST /upload`
- Store files in a local `/uploads` folder
- Save file metadata (name, size, type, path, etc.) to MongoDB
- Retrieve uploaded files by URL
- View metadata for all uploaded files via `GET /files`

---

## Tech Stack

- Node.js
- Express.js
- Multer
- MongoDB + Mongoose
- dotenv

---

## Project Structure

```
file-upload-api/
├── models/
│   └── File.js                # Mongoose schema for file metadata
├── uploads/                   # Local folder to store uploaded files
├── .env                       # Environment variables
├── .gitignore
├── index.js                   # Main server file
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/krisha-dev/FileUploadService.git
cd FileUploadService
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/fileUploadDB
```

> Or replace `MONGO_URI` with your MongoDB Atlas URI.

### 4. Start the Server

```bash
node index.js
```

> The server will start at: `http://localhost:5000`

---

## API Endpoints

### Upload Image

```
POST /upload
```

- **Body Type**: `form-data`
- **Key**: `image`
- **Value**: (select an image file)

**Response:**
```json
{
  "message": "Image uploaded",
  "filePath": "/uploads/1720658123-photo.jpg",
  "id": "6671a2..."
}
```

---

### Get All Uploaded Files Metadata

```
GET /files
```

**Response:**
```json
[
  {
    "_id": "6671a2...",
    "filename": "1720658123-photo.jpg",
    "originalname": "photo.jpg",
    "mimetype": "image/jpeg",
    "size": 145000,
    "path": "/uploads/1720658123-photo.jpg",
    "uploadDate": "2025-06-15T08:25:00.000Z"
  }
]
```

---

### Access Uploaded Image via URL

```
GET /uploads/<filename>
```

Example:

```
http://localhost:5000/uploads/1720658123-photo.jpg
```

---

## Author

**Krisha Devannavar**


