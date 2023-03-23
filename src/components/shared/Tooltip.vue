<template>
    <div class="relative group cursor-help">
        <slot name="icon" v-if="specialIcon"></slot>
        <f-icon v-else icon="fa-solid fa-info" />
        <div :class="getTooltipContainerClasses">
            <slot name="title" v-if="!title"></slot>
            <h1 v-else class="text-lg text-white">{{title}}</h1>

            <slot name="content" v-if="!content"></slot>
            <p class="text-white" v-else>{{content}}</p>
        </div>
    </div>
</template>

<script setup>
    import {computed} from "vue";
    const {title,content,specialIcon, tooltipBackgroundColor,tooltipTextColor} = defineProps({
        title: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: false
        },
        specialIcon: {
            type: Boolean,
            required: false,
            default: false
        },
        tooltipBackgroundColor: {
            type: String,
            required: false,
            default: "bg-black"
        },
        tooltipTextColor: {
            type: String,
            required: false,
            default: "text-white"
        },
    })

    const getTooltipContainerClasses = computed(()=> [
        "absolute w-[16rem] flex flex-col text-center left-[50%] -translate-x-[50%] -top-[4.2rem] origin-bottom group-hover:opacity-100 scale-90 group-hover:scale-100 opacity-0 pointer-events-none transition-all rounded-lg px-2.5 py-1.5 font-medium text-xs",
        tooltipBackgroundColor,
        tooltipTextColor,
    ]);
</script>