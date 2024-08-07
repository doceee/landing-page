<template>
    <section-con>
        <top-tech-mystery-box-header class="col-span-2" />

        <img
            src="@/assets/images/curious-about.png"
            alt="an section image"
            class="rounded-[30px]"
        />

        <div class="text-left">
            <section-header>
                Curious about the
                <span class="text-primary">StockX</span> Mystery Box?
            </section-header>

            <p class="mb-[8px] text-base">
                Experience the thrill of unboxing cutting-edge gadgets with
                Stockx Mystery Boxes. Each box is a treasure trove of
                high-quality electronics, handpicked to elevate your tech game.
            </p>

            <p classs="text-base">
                Expect the unexpected! Our boxes are packed with the latest
                gadgets, from smartphones to gaming consoles, ensuring you get
                the best tech surprises every time.
            </p>
        </div>
    </section-con>
</template>
<script lang="ts">
import SectionCon from "@/components/shared/SectionCon.vue"
import SectionHeader from "~/components/shared/SectionHeader.vue"
import TopTechMysteryBoxHeader from "./TopTechMysteryBoxHeader.vue"

export default defineComponent({
    components: {
        SectionCon,
        SectionHeader,
        TopTechMysteryBoxHeader,
    },
})
</script>
