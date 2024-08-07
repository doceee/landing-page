<template>
    <div>
        <chance-to-win-header />

        <main class="mx-auto w-full max-w-[1232px]">
            <form-section />

            <curious-about />

            <everyone-buzzing />
        </main>

        <the-footer />
    </div>
</template>

<script lang="ts">
import FormSection from "@/components/sections/form-section/FormSection.vue"
import TheFooter from "@/components/the-footer/TheFooter.vue"
import CuriousAbout from "@/components/sections/curious-about/CuriousAbout.vue"
import EveryoneBuzzing from "@/components/sections/EveryoneBuzzing.vue"
import ChanceToWinHeader from "@/components/ChanceToWinHeader.vue"

export default defineComponent({
    name: "LandingPage",

    components: {
        EveryoneBuzzing,
        CuriousAbout,
        FormSection,
        TheFooter,
        ChanceToWinHeader,
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
