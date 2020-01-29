<template>
    <div class="actions flex items-center justify-center py-6">
        <button
            class="rounded-lg px-3 py-1 font-bold text-sm focus:outline-none"
            :class="{ 'bg-white text-gray-800' : editMode, 'bg-blue-500 text-white': !editMode }"
            @click.prevent="editMode = !editMode">
            <span v-if="editMode">
                Done
            </span>
            <span v-else>
                Edit
            </span>
        </button>
        <button class="flex rounded-lg font-bold text-sm focus:outline-none bg-white text-gray-500" @click.prevent="toggleDarkMode">
            <span class="text-sm pl-2 pr-1 py-1 rounded-l-lg" :class="{ 'bg-blue-500 text-white' : (!darkMode) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </span>
            <span class="text-sm pl-1 pr-2 py-1 rounded-r-lg"  :class="{ 'bg-blue-500 text-white' : (darkMode) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </span>
        </button>
    </div>
</template>
<script>

    import { mapActions, mapState } from 'vuex'

    export default {
        props: ['edit'],
        data() {
            return {
                editMode: this.edit
            }
        },
        methods: {
            ...mapActions(['toggleDarkMode'])
        },
        watch: {
            editMode: function(val) {
                this.$emit('trigger', 'edit', val)
            }
        },
        computed: {
            ...mapState(['darkMode'])
        }
    }
</script>
<style>
    .actions button {
        @apply mx-2;
    }
</style>
