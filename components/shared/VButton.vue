<template>
    <button
        class="flex w-full justify-center rounded-[10px] bg-primary px-[16px] py-[12px] font-semibold text-white ring-inset ring-gray-300 hover:bg-[#00613f] hover:opacity-90"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(["click"])

const onClick = (e: Event) => emit("click", e)
</script>
