<template>
    <div>
        <input
            :id="id"
            v-model="computedModelValue"
            class="block w-full flex-1 rounded-[10px] border-[1px] border-[#ADADAD] bg-transparent px-[16px] py-[12px] text-base text-[#2D473E] outline-none placeholder:font-normal placeholder:text-[#808080] focus:border-[1px] focus:border-[#2D473E] focus:placeholder:text-[#2D473E]"
            :class="classes"
            :type="type"
            :placeholder="placeholder"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import type { PropType } from "vue"

export default defineComponent({
    name: "VInput",

    props: {
        modelValue: {
            type: [String, Number, null] as PropType<number | string | null>,
            required: false,
            default: null,
        },

        id: {
            type: String,
            required: false,
            default: () => Math.random().toString(36),
        },

        type: {
            type: String,
            required: false,
            default: "text",
        },

        placeholder: {
            type: String,
            required: false,
            default: "",
        },

        classes: {
            type: String,
            required: false,
            default: "",
        },
    },

    emits: ["update:model-value"],

    computed: {
        computedModelValue: {
            get() {
                return this.modelValue
            },

            set(value: string) {
                let parsedValue: string | number = value

                if (this.type === "number") {
                    const parsingResult = parseFloat(parsedValue)

                    if (!isNaN(parsingResult)) {
                        parsedValue = parsingResult
                    }
                }

                this.$emit("update:model-value", parsedValue)
            },
        },
    },
})
</script>
