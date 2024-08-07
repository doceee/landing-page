<template>
    <div
        class="w-[687px] rounded-[20px] border-[1px] border-[#DBDBDB] p-[24px]"
    >
        <form-header class="mb-[24px]" />

        <form id="form" class="grid grid-cols-2 gap-[16px]" @submit.prevent>
            <v-input v-model="formData.firstName" placeholder="First name" />

            <v-input v-model="formData.lastName" placeholder="Last name" />

            <v-input
                v-model="formData.street"
                placeholder="Street"
                class="col-span-2"
            />

            <v-input
                v-model="formData.postalCode"
                placeholder="Postal code"
                type="number"
            />

            <v-input v-model="formData.city" placeholder="City" />

            <v-input
                v-model="formData.phone"
                placeholder="Phone number"
                type="number"
                class="col-span-2"
            />

            <v-input
                v-model="formData.email"
                placeholder="E-mail"
                type="email"
                class="col-span-2"
            />
        </form>

        <v-button type="submit" form="form" class="my-[24px] text-[16px]">
            PROCEED TO PAYMENT
        </v-button>

        <form-footer />
    </div>
</template>
<script lang="ts">
import { ref } from "vue"
import VInput from "@/components/shared/VInput.vue"
import VButton from "@/components/shared/VButton.vue"
import FormHeader from "./FormHeader.vue"
import FormFooter from "./FormFooter.vue"

export default defineComponent({
    components: {
        VInput,
        VButton,
        FormHeader,
        FormFooter,
    },

    setup() {
        const formData = ref({
            firstName: "",
            lastName: "",
            email: "",
            street: "",
            postalCode: "",
            city: "",
            phone: "",
        })

        return {
            formData,
        }
    },
})
</script>
