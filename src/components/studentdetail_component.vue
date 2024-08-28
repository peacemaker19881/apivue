<template>
  <div>
    <h2>Student List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Sex</th>
          <th>Address</th>
          <th>DOB</th>
          <th>Phone</th>
          <th>Trade</th>
          <th>Level</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.sex }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.dob }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.trade }}</td>
          <td>{{ student.level }}</td>
          <td>
            <button @click="editStudent(student)">Edit</button>
            <button @click="deleteStudent(student.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Success Message -->
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import studentservices from '@/services/studentservices';

export default {
  data() {
    return {
      students: [], // Array to store all students
      successMessage: '', // Success message
    };
  },
  methods: {
    fetchStudents() {
      studentservices.getAllStudents()
        .then((response) => {
          this.students = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editStudent(student) {
      this.$emit('edit', student); // Emit event to edit the selected student
    },
    deleteStudent(id) {
      studentservices.deleteStudent(id)
        .then(() => {
          this.successMessage = 'Student deleted successfully!';
          this.fetchStudents(); // Refresh the student list after deletion
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.fetchStudents(); // Fetch all students when the component is created
  },
  watch: {
    successMessage() {
      if (this.successMessage) {
        setTimeout(() => {
          this.successMessage = ''; // Clear the message after a few seconds
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
.table-container {
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
}

.student-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.student-table th, .student-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.student-table th {
  background-color: #007bff;
  color: white;
}

.student-table tr:hover {
  background-color: #f1f1f1;
}
</style>