<template>
  <div class="input">
    <v-icon :name="name"></v-icon>

    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script scoped>
export default {
  name: "Input",
  props: [
    "placeholder",
    "name",

    "modelValue",
  ],
};
</script>

<style>
.input {
  background: #2d325a;
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  color: #666d9e;
  display: flex;
  align-items: center;
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

svg {
  height: 20px;
  width: 20px;
  margin-right: 16px;
}
</style>