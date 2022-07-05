<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
import ComponentLib from '$lib/components/ComponentLib.svelte';
</script>

<div class="flex gap-2 max-w-prose">
<div class="dark bg-dark-800 text-light-100 p-2">
    <h2>Dark Theme</h2>

    <ComponentLib />
</div>

<div class="light bg-light-50 text-dark-700 p-2">
    <h2>Light Theme</h2>
    <ComponentLib />
</div>
</div>
  