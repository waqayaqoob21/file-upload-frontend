// src/api/fileService.js
import axios from 'axios';

// Change this to match your Django backend URL
// Example if Django runs on http://localhost:8000
const API_BASE_URL = 'http://localhost:8000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // Do not set Content-Type here; the browser will set it for FormData.
});

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file); // "file" must match your Django view

  const response = await axiosInstance.post('/upload/', formData);
  return response.data;
}
