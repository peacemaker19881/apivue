<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import authservices from '@/services/authservices';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await authService.login(this.username, this.password);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/student-registration');
      } catch (error) {
        this.errorMessage = 'Ntabwo wemerewe Kwinjira';
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>