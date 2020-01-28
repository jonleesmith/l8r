<template>
    <div class="bookmark w-full lg:w-1/3 p-6 flex" :class="{ 'edit' : (edit) }">
        <div class="p-8 bg-white rounded-sm shadow flex flex-col">
            <!-- <img :src="bookmark.image" :alt="bookmark.title"> -->
            <div>
                <a
                :href="bookmark.url" target="_blank" 
                class="text-xl font-bold flex items-center mb-2 block">
                    <img v-if="bookmark.icon" :src="bookmark.icon" class="w-4 h-4 mr-3">
                    <p>{{ bookmark.title }}</p>
                </a>
            </div>
            <div class="text-sm text-gray-600 mb-2 flex-grow">
                {{ bookmark.description }}
            </div>
            <div>
                <a class="font-bold text-sm text-blue-500 border-transparent border-b hover:border-blue-500" :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['bookmark', 'edit'],
}
</script>
<style>
.bookmark.edit {
  animation: shake 1s infinite;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
}
</style>
