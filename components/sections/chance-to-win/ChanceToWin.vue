<template>
    <chance-to-win-header />

    <section class="grid grid-cols-2">
        <div></div>
        <contact-form />
    </section>
</template>

<script lang="ts">
import ChanceToWinHeader from "../headers/ChanceToWinHeader.vue"
import ContactForm from "./contact-form/ContactForm.vue"

export default defineComponent({
    components: {
        ChanceToWinHeader,
        ContactForm,
    },
})
</script>
