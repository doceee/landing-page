<template>
    <div>
        <main class="mx-auto w-full max-w-[1232px]">
            <chance-to-win />
        </main>

        <the-footer />
    </div>
</template>

<script lang="ts">
import ChanceToWin from "@/components/sections/ChanceToWin.vue"
import TheFooter from "~/components/footer/TheFooter.vue"

export default defineComponent({
    name: "LandingPage",

    components: {
        ChanceToWin,
        TheFooter,
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
