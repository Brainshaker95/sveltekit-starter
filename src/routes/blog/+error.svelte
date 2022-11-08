<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1>
  {$page.error?.message ?? 'An unexpected error occured on a blog page'}
</h1>
