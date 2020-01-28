<template>
    <div class="text-center">
        {{ meta }}
        <button 
        class="focus:outline-none bg-green-500 text-white font-semibold py-1 px-3 rounded"
        @click.prevent="$emit('save', meta)">Save</button>
    </div>
</template>
<script>

    

    export default {

        props: ['meta'],

    }
</script>
