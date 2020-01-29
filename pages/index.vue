<template>
    <div class="w-full mx-auto" style="max-width: 1000px;">
        <FormInput @complete="addBookmark"></FormInput>
        <ActionBar v-if="bookmarks.length" @trigger="updateOption"></ActionBar>
        <div>
            <div class="flex flex-wrap -mx-2">
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
    import ActionBar from '~/components/ActionBar.vue'
    import Preview from '~/components/Preview.vue'
    import FormInput from '~/components/FormInput.vue'

    export default {
        components: {
            FormInput,
            ActionBar,
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
            updateOption(type, val) {
                this[type] = val
            },
            addBookmark(meta) {
                this.bookmarks.push(meta)
                this.bookmarks = this.bookmarks
                this.$forceUpdate()
            },
            remove(id) {
                this.bookmarks.splice(id, 1)
                this.bookmarks = this.bookmarks
                this.$forceUpdate()
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
