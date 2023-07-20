<script context="module">
    let counter = 0
</script>

<script lang="ts">
    export let options: Array<{
        label: string,
        value: any
    }>;
    export let selected = options[0].value;
    export let horizontal = false;
    let name = 'rg_'+ counter++;

    const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<div class="flex" class:flex-col={!horizontal} class:flex-row={horizontal} class:gap-x-2={horizontal}>
    {#each options as option}
    <slot>
        <div class="flex items-center gap-x-2">
            <input
                type="radio"
                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:bg-dark-200 checked:after:bg-indigo-600 bg-light-700"
                id={name + "_" + slugify(option.label)}
                name={name}
                bind:group={selected}
                value={option.value}
            />
            <label class="block text-sm font-medium leading-6" on:click={() => selected = option.value} for={name + "_" + slugify(option.label)}>{option.label}</label>
        </div>
    </slot>
    {/each}
</div>

<style>
    input[type=radio] {
        appearance: none;
        padding: 10px;
        border-radius:50%;
        position: relative;
    }

    input[type=radio]:checked::after {
        position: absolute;
        padding: 8px;
        border-radius: 50%;
        content: '';
        left: 2px;
        top: 2px;
    }
</style>
