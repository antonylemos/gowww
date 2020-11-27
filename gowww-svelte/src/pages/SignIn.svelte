<script>
  import { UserIcon, MailIcon } from "svelte-feather-icons";

  import { createUser, user } from "../shared/user";
  import { requiredValidation } from "../utils/validations";

  let userStore = createUser();

  let logo = "logo.png";

  let userData = {
    name: "",
    email: "",
  };

  function handleSubmit() {
    if (
      requiredValidation(userData.name) &&
      requiredValidation(userData.email)
    ) {
      userStore.create(userData.name, userData.email);
    }
  }
</script>

<style>
  .signin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  form {
    margin-top: 80px;
  }

  form div {
    background: #2d325a;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    color: #666d9e;
    display: flex;
    align-items: center;
  }

  form div div {
    padding: 0;
    color: #666d9e;
    height: 20px;
    width: 20px;
    margin-right: 16px;
  }

  div + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
  }

  input::placeholder {
    color: #666d9e;
  }

  button {
    background: #7033ff;
    height: 56px;
    border-radius: 16px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 24px;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.8;
  }
</style>

<div class="signin">
  <img src={logo} alt="Gowww" />

  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <div>
        <UserIcon />
      </div>
      <input type="text" placeholder="Nome" bind:value={user.name} />
    </div>
    <div>
      <div>
        <MailIcon />
      </div>
      <input type="text" placeholder="E-mail" bind:value={user.email} />
    </div>

    <button type="submit">Entrar</button>
  </form>
</div>
