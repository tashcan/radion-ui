<script lang="ts">
import 'virtual:uno.css';
import '@unocss/reset/tailwind-compat.css'
</script>

<main data-sveltekit-prefetch class="py-4 w-full mx-auto flex justify-center flex-1">
    <div class="max-w-screen-lg mx-2 sm:mx-4 flex-1 w-[calc(100%-0.5rem)]">
      <slot />
    </div>
</main>
