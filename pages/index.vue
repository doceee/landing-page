<template>
    <div>
        <main class="mx-auto w-full max-w-[1232px]">
            <chance-to-win />

            <top-tech-mystery-box-header />

            <curious-about />

            <everyone-buzzing />
        </main>

        <the-footer />
    </div>
</template>

<script lang="ts">
import ChanceToWin from "~/components/sections/chance-to-win/ChanceToWin.vue"
import TheFooter from "~/components/footer/TheFooter.vue"
import CuriousAbout from "~/components/sections/CuriousAbout.vue"
import EveryoneBuzzing from "~/components/sections/EveryoneBuzzing.vue"
import TopTechMysteryBoxHeader from "~/components/sections/headers/TopTechMysteryBoxHeader.vue"

export default defineComponent({
    name: "LandingPage",

    components: {
        EveryoneBuzzing,
        CuriousAbout,
        ChanceToWin,
        TheFooter,
        TopTechMysteryBoxHeader,
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
