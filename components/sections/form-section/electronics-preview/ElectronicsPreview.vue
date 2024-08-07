<template>
    <div class="relative w-[481px]">
        <price-tag />

        <transition
            enter-active-class="transition duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            mode="out-in"
        >
            <img
                v-if="!currentImage"
                :src="ThePreview"
                alt="an electronics image"
                class="h-[480px] w-[481px]"
            />
            <img
                v-else
                :key="currentImage"
                :src="images[currentImage]"
                alt="an electronics image"
                class="h-[480px] w-[481px]"
            />
        </transition>

        <div class="mt-[16px] flex h-[132px] w-full justify-between">
            <img
                v-for="(com, name, index) in images"
                :key="index"
                :src="com"
                class="w-[132px] rounded-[13.94px] border-[1px] border-primary"
                @click="currentImage = name"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import ThePreview from "@/assets/images/preview.png"
import ThePreview1 from "@/assets/images/preview1.jfif"
import ThePreview2 from "@/assets/images/preview2.png"
import ThePreview3 from "@/assets/images/preview3.jfif"
import PriceTag from "./PriceTag.vue"

const images = {
    img1: ThePreview1,
    img2: ThePreview2,
    img3: ThePreview3,
}

const currentImage = ref<keyof typeof images>()
</script>
