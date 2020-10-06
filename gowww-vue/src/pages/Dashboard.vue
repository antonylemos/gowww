<template>
  <div class="dashboard">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
  name: 'Dashboard',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
}
</style>