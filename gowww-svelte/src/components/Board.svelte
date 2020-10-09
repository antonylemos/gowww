<script>
  import { ArrowRightIcon } from "svelte-feather-icons";
  import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

  export let title;
  export let emoji;
  export let boardTitle;

  function onHandleStandings() {
    dispatch('handle');
  }
</script>

<style>
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
    background: #282d51;
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

  .icon {
    color: #666d9e;
    height: 24px;
    width: 24px;
  }
</style>

<div class="board">
  <h2>{ title }</h2>

  <div class="board-content">
    <header>
      <div class="header-info">
        <span>{ emoji }</span>
        <span>{ boardTitle }</span>
      </div>

      <button on:click={onHandleStandings}>
        <ArrowRightIcon size="24" />
      </button>
    </header>
  </div>
</div>
