import { update_keyed_each } from 'svelte/internal';
import { writable } from 'svelte/store';

export const user = writable({
  name: '',
  email: '',
});

export function createUser() {
  const { set } = writable([])

  function create(name, email) {
    set({ name, email });
  }

  return { create };
}
