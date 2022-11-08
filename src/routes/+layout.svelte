<script lang="ts">
  // import { onMount } from 'svelte';

  // import { browser } from '$app/environment';

  import Header from '$lib/components/Header.svelte';

  import '$scss/global.scss';

  // will work
  // if (browser) {
  //   console.log(window);
  // }

  // will throw an error
  // console.log(window);

  // onMount(() => {
  //   will work
  //   console.log(window);
  // });

  // eslint-disable-next-line no-console
  console.log('Hello world!');
</script>

<Header/>

<main class="container mx-auto my-8 md:my-12 px-4">
  <slot/>
</main>
