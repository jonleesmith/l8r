<template>
    <form class="w-full px-6 lg:w-1/2 mx-auto" @submit.prevent="submit">
        <input class="w-full py-4 px-6 rounded shadow outline-none bg-white border border-transparent" 
        :class="{ 'border-red-500' : (error) }"
        type="text" placeholder="Save for l8r..." v-model="url" />
    </form>
</template>
<script>

    import Loading from '~/components/Loading'

    export default {
        data() {
            return {
                url: '',
                error: false,
            }
        },
        methods: {
           async submit() {
               this.error = false
                try {
                    let response = await this.$api.get('meta-url', {
                        params: {
                            url: this.url
                        }
                    })
                    this.url = ''
                    this.$emit('complete', response.data)
                } catch(err) {
                    this.error = true
                }
            }
        }
    }
</script>
