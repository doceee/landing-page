<template>
    <footer>
        <footer-info />

        <credit-cards />
    </footer>
</template>

<script lang="ts">
import CreditCards from "./CreditCards.vue"
import FooterInfo from "./FooterInfo.vue"

export default defineComponent({
    components: {
        FooterInfo,
        CreditCards,
    },
})
</script>
