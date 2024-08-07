<template>
    <div class="w-full bg-[#F5F5F5]">
        <div
            class="mx-auto grid w-full max-w-[1200px] grid-cols-[379px_378px_379px] gap-[32px] py-[24px]"
        >
            <div v-for="(item, index) in data" :key="index" class="text-left">
                <p class="mb-[4px] text-[12px] font-semibold">
                    {{ item.question }}
                </p>
                <p class="text-[10px] font-normal">{{ item.answer }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const data = [
    {
        question: "How can I win?",
        answer: "Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.",
    },
    {
        question: "No hidden fees?",
        answer: "We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.",
    },
    {
        question: "Why do we need your billing information?",
        answer: "By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner's website.",
    },
]
</script>
