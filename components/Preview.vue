<template>
    <div>
        <div v-if="meta">{{ meta }}</div>
        <p v-else>Fetching...</p>
    </div>
</template>
<script>
    import { getMetadata } from 'page-metadata-parser';
    import domino from 'domino'

    const metascraper = require('metascraper')([
        require('metascraper-author')(),
        require('metascraper-date')(),
        require('metascraper-description')(),
        require('metascraper-image')(),
        require('metascraper-logo')(),
        require('metascraper-clearbit')(),
        require('metascraper-publisher')(),
        require('metascraper-title')(),
        require('metascraper-url')()
    ])

const got = require('got')

    export default {

        props: ['url'],

        data() {
            return {
                meta: null
            }
        },

        async mounted() {
            // const url = this.url;
            // const response = await fetch(url);
            // const html = await response.text();
            // const doc = domino.createWindow(html).document;
            // this.meta = getMetadata(doc, url);
            // this.$emit('complete', this.meta)

            const { body: html, url } = await got(this.url)
            this.meta = await metascraper({ html, url })
            console.log(this.meta)
        }

    }
</script>
