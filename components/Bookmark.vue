<template>
    <div class="w-1/3 p-6 flex">
        <div class="p-8 bg-gray-800 rounded-sm shadow flex-1">
            <!-- <img :src="bookmark.image" :alt="bookmark.title"> -->
            <a :href="bookmark.url" target="_blank" 
            class="text-xl font-bold flex items-center mb-2">
                <img v-if="bookmark.icon" :src="bookmark.icon" class="w-4 h-4 mr-3">
                <p>{{ bookmark.title }}</p>
            </a>
            <div class="text-sm text-gray-500 mb-2">
                {{ bookmark.description }}
            </div>
            <a class="font-bold text-sm text-blue-500 border-transparent border-b hover:border-blue-500" :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
        </div>
    </div>
</template>
<script>
export default {
  props: ['bookmark'],
}
</script>
