<template>
    <div>
        <FormInput @complete="addBookmark"></FormInput>
        <div class="actions flex items-center justify-center pt-6">
            <button class="rounded-lg px-3 py-1 font-bold text-sm focus:outline-none"
                :class="{ 'bg-white text-gray-800' : edit, 'bg-blue-500 text-white': !edit }"
                @click.prevent="edit = !edit">
                <span v-if="edit">
                    Done
                </span>
                <span v-else>
                    Edit
                </span>
            </button>
        </div>
        <div>
            <div class="flex flex-wrap px:6 lg:px-12">
                <Bookmark
                    :style="{ 'animation-delay': `0.${key}s` }"
                    v-for="(bookmark, key) in bookmarks"
                    :bookmark="bookmark"
                    :edit="edit"
                    :id="key"
                    @delete="remove"
                    :key="key">
                </Bookmark>
            </div>
        </div>
    </div>
</template>

<script>
    import Bookmark from '~/components/Bookmark.vue'
    import Preview from '~/components/Preview.vue'
    import FormInput from '~/components/FormInput.vue'

    export default {
        components: {
            FormInput,
            Bookmark,
            Preview
        },
        data() {
            return {
                edit: false,
                meta: false,
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
            previewMeta(meta) {
                this.meta = meta
            },
            addBookmark(meta) {
                this.bookmarks.push(meta)
                this.bookmarks = this.bookmarks
                this.$forceUpdate()
            },
            remove(id) {
                this.bookmarks.splice(id, 1)
                this.bookmarks = this.bookmarks
                this.edit = false
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
