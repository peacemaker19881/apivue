import axios from 'axios';

const API_URL = 'http://localhost:3000/api/students/';

export default {
  getAllStudents() {
    return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  },

  getStudent(id) {
    return axios.get(API_URL + id, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  },

  createStudent(studentData) {
    return axios.post(API_URL, studentData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  },

  updateStudent(id, studentData) {
    return axios.put(API_URL + id, studentData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  },

  deleteStudent(id) {
    return axios.delete(API_URL + id, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }
};