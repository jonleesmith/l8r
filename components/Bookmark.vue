<template>
    <div class="bookmark w-full lg:w-1/3 p-6 flex relative" :class="{ 'edit' : (edit) }">
        <button @click.prevent="deleteBookmark" class="absolute top-0 right-0 pt-4 pr-4 text-gray-600 focus:outline-none" v-if="edit">
            <span class="bg-white inline-block rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </span>
        </button>
        <div class="p-8 bg-white rounded-sm shadow flex flex-col">
            <!-- <div>
                 :style="{
                background: `url(${bookmark.image})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center center',
                'background-size': 'cover',
                }"
            </div> -->
            <div>
                <a
                :href="bookmark.url" target="_blank"
                class="text-xl font-bold flex items-center mb-2 block">
                    <!-- <img v-if="bookmark.icon" :src="bookmark.icon" class="w-4 h-4 mr-3"> -->
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
    props: ['bookmark', 'edit', 'id'],
    methods: {
        deleteBookmark() {
            if ( window.confirm('Are you sure you want to remove this bookmark?') )
            {
                this.$emit('delete', this.id)
            }
        }
    }
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
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(1px, 0, 0);
  }
}
</style>
