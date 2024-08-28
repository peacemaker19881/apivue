<template>
  <div>
    <h2>{{ isEdit ? 'Edit' : 'Add' }} Student</h2>
    <form @submit.prevent="submitForm">
      <!-- Form Fields -->
      <input v-model="student.name" placeholder="Name" required /> <br><br>
      <input v-model="student.sex" placeholder="Sex" required /><br><br>
      <input v-model="student.address" placeholder="Address" required /> <br><br>
      <input v-model="student.dob" type="date" placeholder="DOB" required /> <br><br>
      <input v-model="student.phone" placeholder="Phone" required /> <br><br>
      <input v-model="student.trade" placeholder="Trade" required /> <br><br>
      <input v-model="student.level" placeholder="Level" required /> <br><br>
      <button type="submit">{{ isEdit ? 'Update' : 'Submit' }}</button>
    </form>

    <!-- Success Message -->
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import studentservices from '@/services/studentservices';

export default {
  props: {
    editStudent: Object,
  },
  data() {
    return {
      student: this.editStudent || {
        name: '',
        sex: '',
        address: '',
        dob: '',
        phone: '',
        trade: '',
        level: '',
      },
      isEdit: !!this.editStudent,
      successMessage: '', // Success message
    };
  },
  watch: {
    editStudent(newVal) {
      if (newVal) {
        this.student = { ...newVal };
        this.isEdit = true;
      } else {
        this.resetForm();
      }
    },
  },
  methods: {
    submitForm() {
      const action = this.isEdit ? studentservices.updateStudent(this.student.id, this.student) : studentservices.createStudent(this.student);

      action.then(() => {
        this.successMessage = this.isEdit ? 'Student updated correctly!' : 'Student inserted correctly!';
        this.$emit('refresh'); // Emit event to refresh the student list
        this.resetForm();
      }).catch((error) => {
        console.error(error);
      });
    },
    resetForm() {
      this.student = {
        name: '',
        sex: '',
        address: '',
        dob: '',
        phone: '',
        trade: '',
        level: '',
      };
      this.isEdit = false;
      this.successMessage = '';
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  align-content: center;
}

.student-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.success-message {
  color: green;
  margin-top: 10px;
  text-align: center;
}
</style>