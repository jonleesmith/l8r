<template>
    <div>
        <div v-if="meta">{{ meta }}</div>
        <p v-else>Fetching...</p>
    </div>
</template>
<script>

    export default {

        props: ['url'],

        data() {
            return {
                meta: null
            }
        },

        async mounted() {

            try {
                let response = await this.$api.get('meta-url', {
                    params: {
                        url: this.url
                    }
                })
                this.meta = response.data
                this.$emit('complete', this.meta)
            } catch(err) {
                console.log(err)
                this.$emit('error', err)
            }
        }

    }
</script>
