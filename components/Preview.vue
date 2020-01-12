<template>
    <div>
        <div v-if="meta">{{ meta }}</div>
        <p v-else>Fetching...</p>
    </div>
</template>
<script>
    import { getMetadata } from 'page-metadata-parser';
    import domino from 'domino'

    export default {

        props: ['url'],

        data() {
            return {
                meta: null
            }
        },

        async mounted() {
            const url = this.url;
            const response = await fetch(url);
            const html = await response.text();
            const doc = domino.createWindow(html).document;
            this.meta = getMetadata(doc, url);
            this.$emit('complete', this.meta)
        }

    }
</script>
