<template>
  <div id="app">
    <studentform_component 
      @refresh="refreshStudentList" 
      :editStudent="selectedStudent" 
    />
    <studentdetail_component 
      ref="studentDetails" 
      @edit="setSelectedStudent" 
    />
  </div>
</template>

<script>
import studentform_component from './components/studentform_component.vue'
import studentdetail_component from './components/studentdetail_component.vue';

export default {
  components: {
    studentform_component,
    studentdetail_component
  },
  data() {
    return {
      selectedStudent: null, // To store the student being edited
    };
  },
  methods: {
    setSelectedStudent(student) {
      this.selectedStudent = student;
    },
    refreshStudentList() {
      this.selectedStudent = null;
      this.$refs.studentDetails.fetchStudents(); // Refresh the student list
    }
  }
};
</script>
