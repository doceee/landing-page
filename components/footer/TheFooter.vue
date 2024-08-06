<template>
    <footer-info />
    <credit-cards />
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
