<template>
  <div class="navbar">
    <div class="navbar-content">
      <v-icon class="selected-icon" name="grid"></v-icon>
      <v-icon name="airplay"></v-icon>
      <v-icon name="sidebar"></v-icon>
      <v-icon name="users"></v-icon>
    </div>

    <v-icon class="last-icon" name="settings"></v-icon>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 88px;
  height: 100vh;
  padding: 32px;
  margin-right: 16px;

  background: #202442;
}

.navbar-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

svg {
  color: #666D9E;
  height: 24px;
  width: 24px;
  margin-bottom: 32px;
}

.selected-icon {
  color: #7033FF;
}

.last-icon {
  margin-bottom: 0;
}
</style>
