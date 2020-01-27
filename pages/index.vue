<template>
    <div>
        <form class="w-1/2 mx-auto" @submit.prevent="submit">
            <input class="w-full py-4 px-6 rounded outline-none bg-gray-800" type="text" placeholder="Enter URL and press enter..." v-model="url" />
        </form>
        <Preview :url="url" @complete="addBookmark" v-if="addUrl"></Preview>
        <div class="pt-12">
            <div class="flex flex-wrap px-12">
                <Bookmark 
                    v-for="(bookmark, key) in bookmarks"
                    :bookmark="bookmark"
                    :key="key">
                </Bookmark>
            </div>
        </div>
    </div>
</template>

<script>
    import Bookmark from '~/components/Bookmark.vue'
    import Preview from '~/components/Preview.vue'

    export default {
        components: {
            Bookmark,
            Preview
        },
        data() {
            return {
                addUrl: false,
                url: '',
            }
        },

        mounted() {

            // :style="{
            //     background: `url(${bookmark.image})`,
            //     'background-repeat': 'no-repeat',
            //     'background-size': 'cover',
            // }"

        },

        methods: {
            submit() {
                this.addUrl = true
            },
            addBookmark(meta) {
                this.bookmarks.push(meta)
                this.bookmarks = this.bookmarks
                this.url = ''
                this.addUrl = false
            }
        },

        computed: {
            bookmarks: {
                get: function() {
                    return JSON.parse(localStorage.getItem('bookmarks')) || []
                },
                set: function(val) {
                    localStorage.setItem('bookmarks', JSON.stringify(val))
                }
            }
        },

    }
</script>

<style>
</style>
