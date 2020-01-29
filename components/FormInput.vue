<template>
    <form @submit.prevent="submit">
        <input class="w-full py-4 px-6 rounded shadow outline-none bg-white border-2 border-transparent focus:border-blue-400"
        :class="{ 'border-red-500' : (error) }"
        type="text" placeholder="Enter a URL and press enter..." v-model="url" />
        <Loading v-if="loading"></Loading>
    </form>
</template>
<script>

    import Loading from '~/components/Loading'

    export default {
        components: {
            Loading
        },
        data() {
            return {
                url: '',
                error: false,
                loading: false,
            }
        },
        methods: {
           async submit() {
               this.loading = true
               this.error = false
                try {
                    let response = await this.$api.get('meta-url', {
                        params: {
                            url: this.url
                        }
                    })
                    this.url = ''
                    this.$emit('complete', response.data)
                    this.loading = false
                } catch(err) {
                    this.error = true
                    this.loading = false
                }
            }
        }
    }
</script>
