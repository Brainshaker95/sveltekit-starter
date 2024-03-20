<script lang="ts">
  import { page } from '$app/stores';

  import type { NavigationItem } from '$types/navigation';

  export let vertical = false;
  export let items: NavigationItem[];

  $: activeItem = items.find(({ path }) => {
    const currentPath = $page.url.pathname;

    return (path === '/' && currentPath === '/')
      || (path !== '/' && currentPath.startsWith(path));
  });
</script>

<nav>
  <ul class="flex" class:flex-col="{vertical}">
    {#each items as item (item.path)}
      <li>
        <a
          class="block"
          class:active="{item.path === activeItem?.path}"
          class:p-4="{!vertical}"
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
