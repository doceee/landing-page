<template>
    <section-con class="my-[48px]">
        <div class="text-left text-base">
            <section-header>
                Why is everyone buzzing about these boxes?
            </section-header>

            <p class="mb-[8px]">
                StockX Mystery Boxes are not just about products; they’re about
                the experience. Imagine the excitement of unveiling top-tier
                electronics at a fraction of the cost.
            </p>

            <p>
                Our boxes include a variety of premium tech items, making it a
                must-have for every tech enthusiast. Join the buzz and see why
                everyone is raving about the unbeatable value and surprise
                factor of Stockx Mystery Boxes!
            </p>
        </div>

        <img
            src="@/assets/images/everyone-buzzing.png"
            alt="an section image"
            class="rounded-[30px]"
        />
    </section-con>
</template>
<script lang="ts">
import SectionCon from "@/components/shared/SectionCon.vue"
import SectionHeader from "@/components/shared/SectionHeader.vue"

export default defineComponent({
    components: {
        SectionCon,
        SectionHeader,
    },
})
</script>
