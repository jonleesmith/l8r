<template>
    <div>
        <form class="w-full px-6 lg:w-1/2 mx-auto" @submit.prevent="submit">

            <input class="w-full py-4 px-6 rounded shadow outline-none bg-white" type="text" placeholder="Save URL for l8r..." v-model="url" />
        </form>
        <Preview :url="url" @complete="addBookmark" v-if="addUrl"></Preview>
        <div class="actions flex items-center justify-center pt-6">
            <button class="text-gray-600 outline-none" @click.prevent="edit = !edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
        </div>
        <div>
            <div class="flex flex-wrap px:6 lg:px-12">
                <Bookmark 
                    :style="{ 'animation-delay': `0.${key}s` }"
                    v-for="(bookmark, key) in bookmarks"
                    :bookmark="bookmark"
                    :edit="edit"
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
                edit: false,
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
