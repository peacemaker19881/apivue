<template>
    <div>
      <studentform_component 
        :student="studentToEdit" 
        :isEditing="isEditing" 
        @refreshStudents="fetchStudents" 
      />
      <studentdetails_component 
        @editStudent="setStudentToEdit" 
      />
    </div>
  </template>
  
  <script>
  import studentform_component from '@/components/studentform_component.vue';
  import StudentDetailsComponent from '@/components/studentdetail_component.vue';
  
  export default {
    components: {
      studentform_component,
      studentdetail_component
    },
    data() {
      return {
        studentToEdit: null,
        isEditing: false
      };
    },
    methods: {
      setStudentToEdit(student) {
        this.studentToEdit = student;
        this.isEditing = true;
      },
      fetchStudents() {
        this.$refs.detailsComponent.fetchStudents();
      }
    }
  };
  </script>