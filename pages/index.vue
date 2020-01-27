<template>
    <div class="main-container">
        <form class="w-1/2 mx-auto" @submit.prevent="submit">
            <input class="w-full py-4 px-6 rounded outline-none" type="text" placeholder="Enter URL and press enter..." v-model="url" />
        </form>
        <Preview :url="url" @complete="addBookmark" v-if="addUrl"></Preview>
        <div>
            <ul>
                <li v-for="(bookmark, key) in bookmarks" :key="key">
                    <img :src="bookmark.icon" :alt="bookmark.title">
                    <img :src="bookmark.image" :alt="bookmark.title">
                    <p class="text-xl">{{ bookmark.title }}</p>
                    <div>
                        {{ bookmark.description }}
                    </div>
                    <a class="font-bold" :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Preview from '~/components/Preview.vue'

    export default {
        components: {
            Preview
        },
        data() {
            return {
                addUrl: false,
                url: '',
                bookmarks: [],
            }
        },

        mounted() {

        },

        methods: {
            submit() {
                this.addUrl = true
            },
            addBookmark(meta) {
                this.bookmarks.push(meta)
                this.url = ''
                this.addUrl = false
            }
        }

    }
</script>

<style>
</style>
