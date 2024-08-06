<template>
    <main class="mx-auto w-full max-w-[1232px]">
        <chance-to-win />
    </main>
</template>

<script lang="ts">
import ChanceToWin from "@/components/sections/ChanceToWin.vue"

export default defineComponent({
    name: "LandingPage",

    components: {
        ChanceToWin,
    },

    setup() {
        useHead({
            title: "Langind Page",
            meta: [
                {
                    name: "keywords",
                    content:
                        "Mystery Box, Mystery Electronics, gadgets, StockX, Top Tech, high quality electronics, tech products, contest",
                },
            ],
        })
    },
})
</script>
