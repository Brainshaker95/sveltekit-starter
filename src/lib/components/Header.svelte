<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
</script>

<header class="sticky top-0 border-b border-dark dark:border-light z-40">
  <div class="container mx-auto flex justify-between items-center">
    <a class="block pl-4" data-sveltekit-preload-data href="/">
      SvelteKit Starter
    </a>

    <Navigation
      items="{[{
        path: '/',
        name: 'Home',
      }, {
        path: '/about',
        name: 'About',
      }, {
        path: '/blog',
        name: 'Blog',
      }]}"
    />
  </div>
</header>
