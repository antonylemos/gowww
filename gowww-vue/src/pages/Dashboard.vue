<template>
  <div class="dashboard">
    <Navbar />

    <main>
      <header>
        <img src="../assets/united.svg" alt="Manchester United" />

        <div class="header-content">
          <p>
            <span>Vamos começar?</span><span>🔥</span>
          </p>

          <h1>Bem vindo de volta, {{ this.user.name }}!</h1>

          <span>Sua área já está pronta com as informações do seu clube favorito</span>
        </div>
      </header>

      <div class="board-container">
        <Board title="Últimos jogos" emoji="⚽" boardTitle="Manchester United" />
        <Board title="Classificação" emoji="🏆" :boardTitle="standings[selectedStandings].name" handle="true" @handle-standings="handleStandings" />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Board from '../components/Board';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Board
  },
  data: () => ({
    user: {
      id: Math.random(),
      name: 'Antony',
    },
    standings: [
      {
        id: 0,
        name: 'Premier League',
      },
      {
        id: 1,
        name: 'UEFA Champions League',
      },
    ],
    selectedStandings: 0
  }),
  methods: {
    handleStandings() {
      if (this.selectedStandings === 0) {
        this.selectedStandings = 1;
      } else {
        this.selectedStandings = 0;
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
}

main {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

header {
  display: flex;
  align-items: center;
}

header img {
  height: 88px;
  width: 88px;
  margin-right: 16px;
}

.header-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-content p {
  margin-bottom: 8px;
}

.header-content p span {
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #666D9E;
}

.header-content h1 {
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 8px;
}

.header-content span {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #666D9E;
}

.board-container {
  display: flex;
}

.board-container div + div {
  margin-left: 16px;
}
</style>