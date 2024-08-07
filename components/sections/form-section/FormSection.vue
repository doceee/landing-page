<template>
    <section class="flex items-center justify-between px-[16px]">
        <electronics-preview />

        <contact-form />
    </section>
</template>

<script lang="ts">
import ContactForm from "./contact-form/ContactForm.vue"
import ElectronicsPreview from "./electronics-preview/ElectronicsPreview.vue"

export default defineComponent({
    components: {
        ElectronicsPreview,
        ContactForm,
    },
})
</script>
