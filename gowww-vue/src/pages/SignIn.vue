<template>
  <div class="signin">
    <img src="../assets/logo.png" alt="Gowww" />

    <form @submit.prevent="onSubmit">
      <div class="input">
        <v-icon name="user"></v-icon>

        <input type="text" placeholder="Nome" v-model="user.name" />
      </div>
      <div class="input">
        <v-icon name="mail"></v-icon>

        <input type="text" placeholder="E-mail" v-model="user.email" />
      </div>

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import { requiredValidation } from "../utils/validations";

const validate = {
  name: requiredValidation,
  email: requiredValidation,
};

export default {
  name: "SignIn",
  data: () => ({
    user: {
      name: "",
      email: "",
    },
    errors: {},
  }),
  methods: {
    checkField(name) {
      const value = this.user[name];
      const error = validate[name] ? validate[name](value) : null;
      this.errors[name] = error;
    },
    onSubmit() {
      Object.keys(this.user).forEach((field) => {
        this.checkField(field);
      });

      const errorsIsEmpty = !Object.values(this.errors).some((value) => value);

      if (errorsIsEmpty) {
        this.$emit("update", {
          name: this.user.name,
          email: this.user.email,
        });

        console.log(this.user.name);
      }
    },
  },
};
</script>

<style scoped>
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

.input {
  background: #2d325a;
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  color: #666d9e;
  display: flex;
  align-items: center;
}

.input + .input {
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

svg {
  height: 20px;
  width: 20px;
  margin-right: 16px;
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