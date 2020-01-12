<template>
    <div class="container">
        <div>
            <input type="text" placeholder="Enter URL" v-model="url" />
            <button @click.prevent="submit">Fetch</button>
        </div>
        <Preview :url="url" @complete="addBookmark" v-if="addUrl"></Preview>
        <div>
            <pre>{{ bookmarks }}</pre>
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
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
</style>
