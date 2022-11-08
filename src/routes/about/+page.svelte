<script lang="ts">
  import { counterLocalStore, counterMemoryStore } from '$lib/utils/stores';

  import type { SvelteMouseEvent } from '$types/svelte';

  const changeText = async ({ currentTarget }: SvelteMouseEvent<HTMLButtonElement>): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const response = await fetch(`/api/example${Math.random() > 0.5 ? '?fail=1' : ''}`);

    currentTarget.innerText = await response.text();
  };

  let counter = 0;

  $: squaredCounter = counter * counter;

  const increaseReactiveCounter = (): void => {
    counter += 1;
  };

  const increaseMemoryCounter = (): void => {
    $counterMemoryStore += 1;
  };

  const increaseLocalCounter = (): void => {
    $counterLocalStore += 1;
  };
</script>

<h1 class="mb-4">
  About
</h1>

<button type="button" on:click="{changeText}">
  Click here to change this text
</button>

<br>

<button type="button" on:click="{increaseReactiveCounter}">
  Counter (reactive declaration) -> {counter} (Squared: {squaredCounter})
</button>

<br>

<button type="button" on:click="{increaseMemoryCounter}">
  Counter (memory store) -> {$counterMemoryStore}
</button>

<br>

<button type="button" on:click="{increaseLocalCounter}">
  Counter (local store) -> {$counterLocalStore}
</button>
