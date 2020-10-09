<script>
  import { AirplayIcon, GridIcon, SettingsIcon } from "svelte-feather-icons";
</script>

<style>
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

  /* svg {
    color: #666d9e;
    height: 24px;
    width: 24px;
  }

  svg + svg {
    margin-top: 32px;
  }

  .selected-icon {
    color: #7033ff;
  } */
</style>

<div class="navbar">
  <div class="navbar-content">
    <GridIcon />
    <AirplayIcon />
    <AirplayIcon />
    <AirplayIcon />
  </div>

  <SettingsIcon />
</div>
