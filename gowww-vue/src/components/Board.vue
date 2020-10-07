<template>
  <div class="board">
    <h2>{{ title }}</h2>

    <div class="board-content">
      <header>
        <div class="header-info">
          <span>{{ emoji }}</span>
          <span>{{ boardTitle }}</span>
        </div>

        <button v-if="handle === 'true'" @click="handleStandings">
          <v-icon name="arrow-right"></v-icon>
        </button>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: ['title', 'emoji', 'boardTitle', 'handle'],
  methods: {
    handleStandings() {
      this.$emit('handle-standings');
    }
  }
}
</script>

<style scoped>
.board {
  margin-top: 48px;
  width: 400px;
}

.board h2 {
  font-size: 24px;
  font-weight: 600;
}

.board-content {
  display: flex;
  border-radius: 16px;
  margin-top: 24px;
  background: #282D51;
  height: 500px;
}

.board-content header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
}

.header-info {
  display: flex;
  align-items: center;
}

.header-info span {
  font-size: 24px;
  font-weight: 600;
}

.header-info span + span {
  font-size: 18px;
  margin-left: 16px;
}

.board-content header button {
  display: flex;
  align-items: center;
  border: 0;
  background: none;
}

.board-content header button svg {
  color: #666D9E;
  height: 24px;
  width: 24px;
}
</style>
