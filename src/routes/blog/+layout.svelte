<script lang="ts">
  import Navigation from '$components/Navigation.svelte';

  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="flex">
  <div class="w-1/6">
    <Navigation items="{data.sidebarItems}" vertical="{true}"/>
  </div>

  <div class="w-5/6">
    <slot/>
  </div>
</div>
