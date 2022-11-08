<script lang="ts">
  import { page } from '$app/stores';

  import type { NavigationItem } from '$types/navigation';

  export let vertical = false;

  export let items: NavigationItem[];

  $: activeItem = items.find((item) => {
    if (item.path === '/' && $page.url.pathname === '/') {
      return true;
    }

    if (item.path !== '/' && $page.url.pathname.startsWith(item.path)) {
      return true;
    }

    return false;
  });
</script>

<nav>
  <ul class="flex" class:flex-col="{vertical}">
    {#each items as item}
      <li>
        <a
          class="block"
          class:active="{item.path === activeItem?.path}"
          class:p-4="{!vertical}"
          data-sveltekit-prefetch
          href="{item.path}"
        >
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .active {
    text-decoration: underline;
  }
</style>
