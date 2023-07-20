<script lang="ts">
	let clazz = '';
	export { clazz as class };
</script>

<div class="p-2 rounded-2 border-2 border-indigo-500 p-4 flex flex-col dark:bg-dark-500 bg-light-500 shadow-lg box-shadow {clazz}">
    <slot />
</div>