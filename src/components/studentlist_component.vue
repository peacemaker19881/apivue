<template>
    <div>
      <h2>Student List</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          {{ student.name }} - {{ student.sex }}
          <button @click="viewDetails(student.id)">View Details</button>
          <button @click="deleteStudent(student.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import studentservices from '@/services/studentservices';
  
  export default {
    data() {
      return {
        students: []
      };
    },
    created() {
      this.fetchStudents();
    },
    methods: {
      fetchStudents() {
        studentservices.getAllStudents()
          .then(response => {
            this.students = response.data;
          })
          .catch(error => {
            console.error('Error fetching students:', error);
          });
      },
      viewDetails(id) {
        this.$router.push({ name: 'StudentDetails', params: { id } });
      },
      deleteStudent(id) {
        studentservices.deleteStudent(id)
          .then(() => {
            this.fetchStudents(); // Refresh the list after deletion
          })
          .catch(error => {
            console.error('Error deleting student:', error);
          });
      }
    }
  };
  </script>