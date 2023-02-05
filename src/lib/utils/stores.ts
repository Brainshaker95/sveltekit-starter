import { writable, type Writable } from 'svelte/store';

import { browser } from '$app/environment';

import type { Json } from '$types/core';

const memoryStore = <T extends Json>(initial: T): Writable<T> => writable(initial);

const localStore = <T extends Json>(key: string, initial: T): Writable<T> => {
  if (!browser) {
    return memoryStore(initial);
  }

  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(initial));
  }

  const data = <T>JSON.parse(localStorage.getItem(key) ?? '{}');
  const { subscribe, set, update } = memoryStore(data);

  const storeLocally = (value: T): void => localStorage.setItem(key, JSON.stringify(value));

  return {
    subscribe,
    set: (value): void => {
      set(value);
      storeLocally(value);
    },
    update: (updater): void => {
      let value: T | undefined;

      update((val) => {
        value = updater(val);

        return value;
      });

      storeLocally(value ?? initial);
    },
  };
};

export const counterMemoryStore = <Writable<number>>memoryStore(0);
export const counterLocalStore = <Writable<number>>localStore('counter', 0);
