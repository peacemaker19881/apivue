import axios from 'axios';

const API_URL = 'http://localhost:3000/api/students';

export default {
  createStudent(student) {
    return axios.post(API_URL, student);
  },
  getAllStudents() {
    return axios.get(API_URL);
  },
  getStudentById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  updateStudent(id, student) {
    return axios.put(`${API_URL}/${id}`, student);
  },
  deleteStudent(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};